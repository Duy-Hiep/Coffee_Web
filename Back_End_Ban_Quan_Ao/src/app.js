import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./configs/Database";

import productRouter from "./routes/ProductRouter";
import categoryRouter from "./routes/CategoryRouter";
import authRouter from "./routes/AuthRouter";
import sliderRouter from "./routes/SliderRouter";
import blogRouter from "./routes/BlogRouter";
const app = express();
dotenv.config();

app.use(express.json());    
app.use(cors());
app.use(productRouter);
app.use(categoryRouter);
app.use(authRouter);
app.use(sliderRouter);
app.use(blogRouter);
connectDb(process.env.URL_MONGO);

export const viteNodeApp = app;
