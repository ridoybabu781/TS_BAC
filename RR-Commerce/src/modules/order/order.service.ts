import type { NextFunction, Request, Response } from "express";
import type { IOrder } from "./order.interface.js";
import User from "../auth/user.model.js";
import type { IBaseUser } from "../auth/user.interface.js";
import createHttpError from "http-errors";
import { Order } from "./order.model.js";
import { sendMail } from "../../utils/sendMail.js";

const SCreateOrder = async (
  payload: IOrder,
  req: Request,
  next: NextFunction
) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user || user.role !== "user") {
    return next(createHttpError(400, "User Not Allowed to order"));
  }

  if (payload.paymentMethod === "cod") {
    await sendMail(user.email, "Your Order Placed by Cash On Delivery", ``);

    const orderData = await Order.create({
      ...payload,
      customer: userId,
      paymentStatus: "unpaid",
    });
    return { type: "cod", order: orderData };
  }

  if (payload.paymentMethod === "sslcommerz") {
    await sendMail(
      user.email,
      "Your Order Placed by SSL Commerz,confirm your payment",
      ``
    );
    const orderData = await Order.create({
      ...payload,
      customer: userId,
      status: "pending",
    });
    return { type: "sslcommerz", order: orderData };
  }
};

const SGetMyOrders = async (req: Request) => {
  return await Order.find({ customer: req.userId });
};

const SUpdateOrderStatus = async (
  req: Request,
  status: string,
  next: NextFunction
) => {
  const order = await Order.findByIdAndUpdate();
};
export const SOrder = {
  SCreateOrder,
  SGetMyOrders,
  SUpdateOrderStatus,
};
