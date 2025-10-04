import { SOrder } from "./order.service.js";
import createHttpError from "http-errors";
import { sendMail } from "../../utils/sendMail.js";
export const createOrder = async (req, res, next) => {
    try {
        const order = SOrder.SCreateOrder(req, req.body, next);
        if (!order) {
            return next(createHttpError(400, "Order Creation Failed"));
        }
        res.status(201).json({ message: "Order placed successful", order });
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
        res.status(200).json({ message: "Order fetched successfully" });
    }
    catch (error) {
        next(error);
    }
};
export const updateOrderStatus = async (req, res, next) => {
    try {
        const updatedOrder = await SOrder.SUpdateOrderStatus(req, req.body.status, next);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=order.controller.js.map