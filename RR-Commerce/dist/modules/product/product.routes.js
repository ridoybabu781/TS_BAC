import { Router } from "express";
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct, } from "./product.controller.js";
import { upload } from "../../utils/multer.js";
import { isVendor } from "../../middlewares/Vendor.js";
const router = Router();
router.post("/addProduct", upload.array("productImage"), isVendor, addProduct);
router.get("/:id", getProduct);
router.get("/", getProducts);
router.put("/update/:id", isVendor, updateProduct);
router.delete("/delete/:id", isVendor, deleteProduct);
export const ProductRouter = router;
//# sourceMappingURL=product.routes.js.map