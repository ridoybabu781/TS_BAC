import { Router } from "express";
import { isUser } from "../../middlewares/User.js";
import { addToCart, getCartItems, removeCartItem } from "./cart.controller.js";

const router = Router();

router.post("/add", isUser, addToCart);
router.get("/", isUser, getCartItems);
router.post("/remove/:id", isUser, removeCartItem);

export const CartRouter = router;
