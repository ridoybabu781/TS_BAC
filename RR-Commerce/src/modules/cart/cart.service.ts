import type { Request } from "express";
import type { ICart } from "./cart.interface.js";
import { Cart } from "./cart.model.js";
import { Product } from "../product/product.model.js";
import createHttpError from "http-errors";

const SAddToCart = async (req: Request) => {
  const userId = req.userId;
  const { productId, qty } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    throw createHttpError(404, "Product not found");
  }

  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = new Cart({
      user: userId,
      items: [{ product: productId, qty, price: product.price }],
      totalPrice: product.price * qty,
    });
  } else {
    cart.items.push({ product: productId, qty, price: product.price });
    cart.totalPrice += product.price * qty;
  }

  return await cart.save();
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
