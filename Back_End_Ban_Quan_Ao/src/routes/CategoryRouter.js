import express from "express";
import {
    getAllCategory,
    getOneCategory,
    creatCategory,
    removeCategory,
    updateCategory,
} from "../controllers/CategoryControllers";

const router = express.Router();
router.get("/categories", getAllCategory);
router.get("/categories/:id", getOneCategory);
router.post("/categories", creatCategory);
router.delete("/categories/:id", removeCategory);
router.put("/categories/:id", updateCategory);
export default router;