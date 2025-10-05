import type { NextFunction, Request } from "express";
import type { IOrder } from "./order.interface.js";
import User from "../auth/user.model.js";
import type { IBaseUser } from "../auth/user.interface.js";
import createHttpError from "http-errors";
import { Order } from "./order.model.js";
import { sendMail } from "../../utils/sendMail.js";

const SCreateOrder = async (
  req: Request,
  payload: IOrder,
  next: NextFunction
) => {
  const userId = req.userId;
  const user: IBaseUser | null = await User.findById(userId);
  if (!user || user.role !== "user") {
    return next(createHttpError(400, "User Not Allowed to order"));
  }

  await sendMail(user.email, "Your Order Placed", ``);

  return await Order.create({ ...payload, customer: userId });
};

const SGetMyOrders = async (req: Request) => {
  return await Order.find({ customer: req.userId });
};

const SUpdateOrderStatus = async (
  req: Request,
  status: string,
  next: NextFunction
) => {
  const order = await Order.findByIdAndUpdate()
};
export const SOrder = {
  SCreateOrder,
  SGetMyOrders,
  SUpdateOrderStatus,
};
