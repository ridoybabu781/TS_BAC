import type { NextFunction, Request, Response } from "express";
import { SOrder } from "./order.service.js";
import type { IOrder } from "./order.interface.js";
import createHttpError from "http-errors";
import { sendMail } from "../../utils/sendMail.js";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = SOrder.SCreateOrder(
      req as Request,
      req.body as IOrder,
      next as NextFunction
    );

    if (!order) {
      return next(createHttpError(400, "Order Creation Failed"));
    }

    res.status(201).json({ message: "Order placed successful", order });
  } catch (error) {
    next(error);
  }
};

export const getMyOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const myOrders = await SOrder.SGetMyOrders(req as Request);
    if (!myOrders) {
      return next(createHttpError(404, "No order found"));
    }
    res.status(200).json({ message: "Order fetched successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedOrder = await SOrder.SUpdateOrderStatus(
      req,
      req.body.status,
      next
    );
  } catch (error) {
    next(error);
  }
};
