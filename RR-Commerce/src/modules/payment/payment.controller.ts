import type { NextFunction, Request, Response } from "express";
import { SPayment } from "./payment.service.js";
import createHttpError from "http-errors";
import { Order } from "../order/order.model.js";

export const payBill = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bill = await SPayment.SPayBill(
      req as Request,
      res as Response,
      next as NextFunction
    );
    if (!bill) {
      return next(createHttpError(400, "Payment failed"));
    }

    return res.status(200).json(bill);
  } catch (error) {
    next(error);
  }
};

export const success = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByIdAndUpdate(
      orderId,
      {
        paymentStatus: "paid",
        status: "paid",
      },
      { new: true }
    );

    if (!order) {
      return next(createHttpError(400, "Order updation failed"));
    }
    res.status(200).json({ message: "Order Completed Successfully", order });
  } catch (error) {
    next(error);
  }
};

export const failed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByIdAndUpdate(
      orderId,
      {
        paymentStatus: "failed",
        status: "pending",
      },
      { new: true }
    );

    if (!order) {
      return next(createHttpError(400, "Order updation failed"));
    }
    res.status(200).json({ message: "Payment Failed", order });
  } catch (error) {
    next(error);
  }
};

export const canceled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
   try {
     const orderId = req.params.id;
     const order = await Order.findByIdAndUpdate(
       orderId,
       {
         paymentStatus: "unpaid",
         status: "pending",
       },
       { new: true }
     );

     if (!order) {
       return next(createHttpError(400, "Order updation failed"));
     }
     res.status(200).json({ message: "Payment Canceled", order });
   } catch (error) {
     next(error);
   }
};
