import { SOrder } from "./order.service.js";
import createHttpError from "http-errors";
export const createOrder = async (req, res, next) => {
    try {
        const result = await SOrder.SCreateOrder(req.body, req, next);
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
    }
    catch (error) {
        next(error);
    }
};
export const getMyOrders = async (req, res, next) => {
    try {
        const myOrders = await SOrder.SGetMyOrders(req);
        if (!myOrders) {
            return next(createHttpError(404, "No order found"));
        }
        res.status(200).json({ message: "Order fetched successfully", myOrders });
    }
    catch (error) {
        next(error);
    }
};
export const updateOrderStatus = async (req, res, next) => {
    try {
        const updatedOrder = await SOrder.SUpdateOrderStatus(req, req.body.status, next);
        if (!updatedOrder) {
            return next();
        }
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=order.controller.js.map