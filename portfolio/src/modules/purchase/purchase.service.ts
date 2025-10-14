import type { NextFunction, Request } from "express";
import type { IPurchase } from "./purchace.interface.js";
import { Purchase } from "./purchase.model.js";

const SMakePurchase = async (req: Request, payload: IPurchase) => {
  return await Purchase.create({
    ...payload,
    customer: req.userId,
    design: req.params.id,
  });
};
const SGetMyPurchase = async (id: string) => {
  return await Purchase.find({ customer: id });
};

export const SPurchase = {
  SMakePurchase,
  SGetMyPurchase,
};
