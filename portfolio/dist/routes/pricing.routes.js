import { Router } from "express";
import { isAdmin } from "../middlewares/Admin.js";
import { createPricing, deletePricing, getPricing, getPricings, } from "../controllers/pricing.controller.js";
const router = Router();
router.post("/addPricing", isAdmin, createPricing);
router.get("/", getPricings);
router.get("/:id", getPricing);
router.delete("/:id", isAdmin, deletePricing);
export const PricingRouter = router;
//# sourceMappingURL=pricing.routes.js.map