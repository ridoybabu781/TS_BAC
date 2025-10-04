import { Router } from "express";
import { isUser } from "../../middlewares/User.js";
import { validation } from "../../middlewares/Validator.js";
import { VCreateOrder } from "./order.validator.js";
import {
  createOrder,
  getMyOrders,
  updateOrderStatus,
} from "./order.controller.js";
import { isVendor } from "../../middlewares/Vendor.js";
const router = Router();

router.post("/createOrder", isUser, validation(VCreateOrder), createOrder);
router.get("/myOrders", isUser, getMyOrders);
router.put("/updateOrderStatus", isVendor, updateOrderStatus);

export const OrderRouter = router;
