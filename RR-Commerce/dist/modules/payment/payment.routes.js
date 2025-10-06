import { Router } from "express";
import { isUser } from "../../middlewares/User.js";
import { canceled, payBill, success } from "./payment.controller.js";
import { fail } from "assert";
const router = Router();
router.post("/payBill/:id", isUser, payBill);
router.post("/success/:id", success);
router.post("/fail/:id", fail);
router.post("/cancel/:id", canceled);
export const PaymentRouter = router;
//# sourceMappingURL=payment.routes.js.map