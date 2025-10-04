import exress, { type Application } from "express";
import { handleError } from "./middlewares/handleError.js";
import { ProductRouter } from "./modules/product/product.routes.js";
import { UserRouter } from "./modules/auth/user.routes.js";
import { CategoryRouter } from "./modules/categories/category.routes.js";

const app: Application = exress();

// middlewires
app.use(exress.json());
app.use(exress.urlencoded({ extended: true }));

// Routing
app.use("/api/auth", UserRouter);
app.use("/api/product", ProductRouter);
app.use("/api/category", CategoryRouter);

// global error
app.use(handleError);

export default app;
