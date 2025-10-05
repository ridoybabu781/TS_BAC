import express, {} from "express";
import cookieParser from "cookie-parser";
import { handleError } from "./middlewares/handleError.js";
import { UserRouter } from "./routes/user.routes.js";
import { AdminRouter } from "./routes/admin.routes.js";
import { DesignRouter } from "./routes/design.routes.js";
import { CategoryRouter } from "./routes/category.routes.js";
import { PurchaseRouter } from "./routes/purchase.routes.js";
import { PricingRouter } from "./routes/pricing.routes.js";
import { ReviewRouter } from "./routes/review.routes.js";
const app = express();
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
//# sourceMappingURL=app.js.map