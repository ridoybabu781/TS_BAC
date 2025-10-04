import User from "../auth/user.model.js";
import createHttpError from "http-errors";
import { Order } from "./order.model.js";
import { sendMail } from "../../utils/sendMail.js";
const SCreateOrder = async (req, payload, next) => {
    const userId = req.userId;
    const user = await User.findById(userId);
    if (!user || user.role !== "user") {
        return next(createHttpError(400, "User Not Allowed to order"));
    }
    await sendMail(user.email, "Your Order Placed", ``);
    return await Order.create({ ...payload, customer: userId });
};
const SGetMyOrders = async (req) => {
    return await Order.find({ customer: req.userId });
};
const SUpdateOrderStatus = async (req, status, next) => { };
export const SOrder = {
    SCreateOrder,
    SGetMyOrders,
    SUpdateOrderStatus,
};
//# sourceMappingURL=order.service.js.map