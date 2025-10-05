import express, {} from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { handleError } from "./middlewares/handleError.js";
import { UserRouter } from "./routes/user.routes.js";
import { AdminRouter } from "./routes/admin.routes.js";
import { DesignRouter } from "./routes/design.routes.js";
import { CategoryRouter } from "./routes/category.routes.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//routing
app.use("/api/auth", UserRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/design", DesignRouter);
app.use("/api/category", CategoryRouter);
//global error
app.use(handleError);
export default app;
//# sourceMappingURL=app.js.map