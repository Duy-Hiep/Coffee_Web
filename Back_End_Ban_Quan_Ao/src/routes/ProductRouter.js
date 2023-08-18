import express from "express";
import {
    GetAllProduct,
    GetOneProduct,
    CreateProduct,
    RemoveProduct,
    UpdateProduct,
} from "../controllers/ProductControllers";

const router = express.Router();
router.get("/products", GetAllProduct);
router.get("/products/:id", GetOneProduct);
router.post("/products", CreateProduct);
router.delete("/products/:id", RemoveProduct);
router.put("/products/:id", UpdateProduct);
export default router;