import Category from "../models/CategoryModel";
import Product from "../models/ProductModel";

export const getAllCategory = async(req, res) => {
    try {
        const category = await Category.find();
        if(!category){
            return res.status(401).json({
                message: "Danh muc khong ton tai",
            });
        }
        return res.json({
            message: "Lay danh muc thanh cong",
            category,
        })
    } catch (error) {
        res.status(401).json({
            message: error.message,
        })
    }
};

export const getOneCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate(
            "products"
        );
        if(!category){
            return res.status(401).json({
                message: "Danh muc khong ton tai",
            })
        }
        return res.json({
            message: "Lay danh muc thanh cong",
            category
        })
    } catch (error) {
        return res.status(401).json({
            message: error.message,
        })
    }
}

export const creatCategory = async(req, res) => {
    const formData = req.body;
    if(!formData.name){
        return res.status(401).json({
            message: "Phai nhap ten danh muc",
        })
    }
    try {
        const isName = await Category.findOne({name: formData.name});
        if(isName){
            return res.status(401).json({
                message: "Danh muc ton tai",
            });
        }
        const category = await Category.create(req.body);
        if(!category){
            return res.status(401).json({
                message: "Danh muc khong ton tai",
            });
        }
        return res.json({
            message: "Them danh muc thanh cong",
            category
        })
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
};

export const removeCategory = async(req, res) => {
    try {
        const category = await Category.findByIdAndRemove(req.params.id);
        await Product.deleteMany({categoryId: req.params.id});
        if(!category){
            return res.status(401).json({
                message: "Danh muc khong ton tai",
            });
        }
        return res.json({
            message: "Xoa danh muc thanh cong",
            category,
        });
    } catch (error) {
        return res.status(401).json({
            message: error.message,
        })
    }
};

export const updateCategory = async(req, res) => {
    const id = req.params.id;
    const formData = req.body;
    if(!formData.name){
        return res.status(401).json({
            message: "Phai nhap ten danh muc",
        });
    }
    try {
        const data = await Category.findById(id);
        if(!data){
            return res.status(401).json({
                message: "Khong tim thay danh muc",
            });
        }
        else{
            data.name = formData.name;
            await data.save();
            return res.json({
                message: "Cap nhat danh muc thanh cong",
                data,
            })
        }
    } catch (error) {
        return res.status(401).json({
            message: error.message,
        })
    }
}
