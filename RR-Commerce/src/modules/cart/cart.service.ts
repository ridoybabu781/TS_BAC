import type { Request } from "express";
import type { ICart } from "./cart.interface.js";
import { Cart } from "./cart.model.js";

const SAddToCart = async (req: Request) => {
  return await Cart.create({ ...req.body, user: req.userId });
};

const SGetCartItems = async (req: Request) => {
  return await Cart.find({ user: req.userId });
};

const SRemoveCartItem = async (req: Request) => {
  return await Cart.findByIdAndDelete(req.params.id);
};

export const CService = {
  SAddToCart,
  SGetCartItems,
  SRemoveCartItem,
};
