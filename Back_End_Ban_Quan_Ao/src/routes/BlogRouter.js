import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlog,
  getOneBlog,
  updateBlog,
} from "../controllers/BlogControllers.js";

const router = express.Router();
router.get("/blog/:id", getOneBlog);
router.get("/blog", getAllBlog);
router.post("/blog", createBlog);
router.put("/blog/:id", updateBlog);
router.delete("/blog/:id", deleteBlog);
export default router;
