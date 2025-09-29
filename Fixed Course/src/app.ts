import express from "express";
import type { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { CourseRoutes } from "./modules/course/course.routes.js";
import { HandleError } from "./middlewares/handleError.js";

dotenv.config();

const app: Application = express();

// Middlewires
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routing

app.use("/api/course/", CourseRoutes);

// Global Error Handler
app.use(HandleError);

export default app;
