import express, { type Application } from "express";
import cookieParser from "cookie-parser";

import { handleError } from "./middlewares/handleError.js";
import { AdminRouter } from "./modules/auth/admin/admin.routes.js";
import { CategoryRouter } from "./modules/category/category.routes.js";
import { PurchaseRouter } from "./modules/purchase/purchase.routes.js";
import { PricingRouter } from "./modules/pricing/pricing.routes.js";
import { ReviewRouter } from "./modules/review/review.routes.js";
import { UserRouter } from "./modules/auth/user/user.routes.js";
import { DesignRouter } from "./modules/design/design.routes.js";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routing
app.use("/api/auth", UserRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/design", DesignRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/purchase", PurchaseRouter);
app.use("/api/pricing", PricingRouter);
app.use("/api/review", ReviewRouter);

//global error
app.use(handleError);

export default app;
