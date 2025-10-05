import type { NextFunction, Request, Response } from "express";
import { SPurchase } from "../service/purchase.service.js";
import createHttpError from "http-errors";
import { Purchase } from "../models/purchase.model.js";

export const makePurchase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const purchase = await SPurchase.SMakePurchase(req as Request, req.body);
    if (!purchase) {
      return next(createHttpError(400, "Purchace making failed"));
    }
    res.status(201).json({ message: "Purchase making success", purchase });
  } catch (error) {
    next(error);
  }
};

export const getMyPurchase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const purchases = await SPurchase.SGetMyPurchase(req.userId as string);
    if (!purchases) {
      return next(createHttpError(404, "No purchases found"));
    }
    res
      .status(200)
      .json({ message: "Purchases fetched successfully", purchases });
  } catch (error) {
    next(error);
  }
};
