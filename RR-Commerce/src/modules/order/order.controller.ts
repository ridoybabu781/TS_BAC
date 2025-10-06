import type { NextFunction, Request, Response } from "express";
import { SOrder } from "./order.service.js";
import type { IOrder } from "./order.interface.js";
import createHttpError from "http-errors";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SOrder.SCreateOrder(
      req.body as IOrder,
      req as Request,
      next as NextFunction
    );

    if (!result) {
      return next(createHttpError(400, "Order Creation Failed"));
    }

    if (result.type === "cod") {
      return res.status(201).json({
        message: "Order created by cash on delivery",
        order: result.order,
      });
    }

    if (result.type === "sslcommerz") {
      return res.status(201).json({
        message: "Order created by SSLCommerz, please pay for confirmation",
        order: result.order,
        redirectUrl: `/payment/payBill/${result.order._id}`,
      });
    }
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
    res.status(200).json({ message: "Order fetched successfully", myOrders });
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
      req as Request,
      req.body.status,
      next as NextFunction
    );
    if (!updatedOrder) {
      return next();
    }
  } catch (error) {
    next(error);
  }
};
