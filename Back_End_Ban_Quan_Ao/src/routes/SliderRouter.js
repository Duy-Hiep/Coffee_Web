import express from "express";
import { getAllSlider, createSlider, getOneSlider, updateSlider, deleteSlider } from "../controllers/SliderControllers.js";

const router = express.Router();
router.get("/slider/:id", getOneSlider);
router.get("/slider", getAllSlider);
router.post("/slider", createSlider);
router.put("/slider/:id", updateSlider);
router.delete("/slider/:id", deleteSlider);
export default router;