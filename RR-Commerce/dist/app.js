import exress, {} from "express";
import { handleError } from "./middlewares/handleError.js";
import { ProductRouter } from "./modules/product/product.routes.js";
const app = exress();
// middlewires
app.use(exress.json());
app.use(exress.urlencoded({ extended: true }));
// Routing
app.use("/api/product", ProductRouter);
// global error
app.use(handleError);
export default app;
//# sourceMappingURL=app.js.map