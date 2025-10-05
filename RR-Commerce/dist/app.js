import express, {} from "express";
import { handleError } from "./middlewares/handleError.js";
import { ProductRouter } from "./modules/product/product.routes.js";
import { UserRouter } from "./modules/auth/user.routes.js";
import { CategoryRouter } from "./modules/categories/category.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { vendorRouter } from "./modules/auth/vendor/vendor.routes.js";
import { adminRouter } from "./modules/auth/admin/admin.routes.js";
import { CartRouter } from "./modules/cart/cart.routes.js";
import { ReviewRouter } from "./modules/review/review.routes.js";
const app = express();
// middlewires
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.ORIGIN || "http://localhost:5173",
    credentials: true,
}));
// Routing
app.use("/api/auth", UserRouter);
app.use("/api/product", ProductRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/vendor", vendorRouter);
app.use("/api/admin", adminRouter);
app.use("/api/cart", CartRouter);
app.use("/api/review", ReviewRouter);
// global error
app.use(handleError);
export default app;
//# sourceMappingURL=app.js.map