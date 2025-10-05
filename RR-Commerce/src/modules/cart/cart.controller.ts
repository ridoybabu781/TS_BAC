import type { NextFunction, Request, Response } from "express";
import { CService } from "./cart.service.js";
import createHttpError from "http-errors";

export const addToCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = await CService.SAddToCart(req as Request);
    if (!cart) {
      return next(createHttpError(400, "Failed to add cart"));
    }
    res.status(201).json({ message: "Added to cart successfully", cart });
  } catch (error) {
    next(error);
  }
};
export const getCartItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cartItems = await CService.SGetCartItems(req as Request);
    if (cartItems.length === 0) {
      return next(createHttpError(404, "No item found"));
    }
    res.status(200).json({
      message: "Item fetched successfully",
      cartItems,
    });
  } catch (error) {
    next(error);
  }
};
export const removeCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedItem = await CService.SRemoveCartItem(req as Request);
    if (!deletedItem) {
      return next(createHttpError(400, "Failed to remove from cart"));
    }
    res
      .status(200)
      .json({ message: "Item removed from cart successfully", deletedItem });
  } catch (error) {
    next(error);
  }
};
