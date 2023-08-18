import Product from "../models/ProductModel";
import Category from "../models/CategoryModel";

export const GetAllProduct = async(req, res) => {
    const {_page = 1, _order = "asc", _limit = 10, _sort = "createAt"} = req.query

    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [_sort]: _order == "desc" ? -1 : 1,
        }
    }

    try {
        const product = await Product.paginate({}, options);
        if(!product){
            return res.status(400).json({
                message: "Khong co san pham nao",
            });
        }
        return res.json({
            message: "Lay thanh cong san pham",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

export const GetOneProduct = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.status(400).json({
                message: "Khong co du lieu",
            });
        } 
        return res.json({
            message: "Lay thanh cong du lieu",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

export const CreateProduct = async(req, res) => {
    const { name, image, price, description } = req.body;
        if(!name || !image || !price || !description){
            return res.status(400).json({
                message: "Vui long dien day du thong tin"
            });
        }
    try {
        const isName = await Product.findOne({name});
        if(isName){
            return res.status(401).json({
                message: "San pham da ton tai",
            });
        }

        const product = await Product.create(req.body);
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {products: product._id},
        });
        if(!product){
            return res.status(400).json({
                message: "San pham khong ton tai",
            });
        }
        return res.json({
            message: "Them san pham thanh cong",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

export const RemoveProduct = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if(!product){
            return res.status(400).json({
                message: "San pham khong ton tai",
            });
        }
        const categoryId = product.categoryId;
        await Category.findByIdAndUpdate(categoryId, {
            $pull: {products: product._id},
        });
        return res.json({
            message: "Xoa san pham thanh cong",
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
};

export const UpdateProduct = async(req, res) => {
    const id = req.params.id;
    const {name, image, price, description, categoryId} = req.body;
    if(!name || !image || !price || !description || !categoryId) {
        return res.status(401).json({
            message: "Vui long dien day du thong tin",
        });
    }
    try {
        const product = await Product.findOneAndUpdate({_id: id}, req.body, {
            new: true,
        });
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {products: product._id},
        });
        if(!product){
            return res.status(400).json({
                message: "Khong tim thay san pham",
            });
        }
        return res.json({
            message: "Cap nhat san pham thanh cong",
            product
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}
