import { Router } from "express";
import { isUser } from "../../middlewares/User.js";
import { getMyPurchase, makePurchase } from "./purchase.controller.js";
const router = Router();
router.post("/makePurchase", isUser, makePurchase);
router.get("/", isUser, getMyPurchase);
export const PurchaseRouter = router;
//# sourceMappingURL=purchase.routes.js.map