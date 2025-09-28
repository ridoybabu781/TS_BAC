import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { CourseRoutes } from "./modules/course/course.routes.js";
import { HandleError } from "./middlewares/handleError.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/course/", CourseRoutes);
app.use(HandleError);
export default app;
//# sourceMappingURL=app.js.map