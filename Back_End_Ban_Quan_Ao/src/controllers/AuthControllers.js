import jwt from "jsonwebtoken";
import User from "../models/AuthModel";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();
let refreshTokens = [];

const createAccessToken = (payload) => {
    return jwt.sign(
        {id: payload._id, admin: payload.admin},
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "1d",
        }
    );
};

const createRefreshToken = (payload) => {
    return jwt.sign(
        {id: payload._id, admin: payload.admin},
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: "30d",
        }
    );
};

export const signup = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(401).json({
                message: "Vui long dien day du thong tin",
            });
        }

        const userExits = await User.findOne({email});
        if(userExits){
            return res.status(401).json({
                message: "Email da duoc danh ky",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        return res.status(201).json({
            message: "Dang ky thanh cong",
            user,
        })
    } catch (error) {
        return res.status(401).json({
            message: error.message,
        })
    }
};

export const signin = async(req, res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: "Vui long dien day du thong tin",
            })
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message: "Sai tai khoan dang nhap",
            })
        }

        const hashedPassword = await bcrypt.compare(password, user.password);
        if(!hashedPassword){
            return res.status(401).json({
                message: "Mat khau khong khop",
            });
        }

        const accessToken = createAccessToken(user);
        const RefreshToken = createRefreshToken(user);
        refreshTokens.push(RefreshToken);
        // console.log(accessToken);
        res.cookie("refreshToken", RefreshToken, {
            httpOnly: true,
            secure: false,
            path: "/",
            sameSite: "strict",
        });
        user.password = undefined;
        return res.status(201).json({
            message: "Dang nhap thanh cong",
            accessToken,
            user,
        })
    } catch (error) {
        return res.status(401).json({
            message: error.message,
        })
    }
}


