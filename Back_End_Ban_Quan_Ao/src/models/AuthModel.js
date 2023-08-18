import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            minLength: 6,
            maxLength: 255,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        admin: {
            type: Boolean,
            default: false,
        }
            
    },
    {timestamps: true, versionKey: false}
    
);

export default mongoose.model("User", userSchema)