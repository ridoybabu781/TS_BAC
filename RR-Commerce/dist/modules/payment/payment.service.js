import { Order } from "../order/order.model.js";
import createHttpError from "http-errors";
import { configDotenv } from "dotenv";
import axios from "axios";
configDotenv();
const SPayBill = async (req, res, next) => {
    try {
        const userId = req.userId;
        const orderId = req.params.orderId;
        const order = await Order.findOne({
            _id: orderId,
            customer: userId,
        });
        if (!order) {
            return next(createHttpError(404, "Order not found"));
        }
        const transactionId = "tnx_" + Date.now();
        const data = {
            store_id: process.env.SSLC_STORE_ID,
            store_passwd: process.env.SSLC_STORE_PASS,
            total_amount: order.totalPrice,
            currency: "USD",
            tran_id: transactionId,
            success_url: `http://localhost:5050/api/payment/success/${orderId}`,
            fail_url: `http://localhost:5050/api/payment/fail/${order}`,
            cancel_url: `http://localhost:5050/api/payment/cancelled/${order}`,
            cus_name: order.customer.name,
            cus_email: order.customer.email,
            cus_phone: order.phone,
            cus_add1: order.shippingAddress,
        };
        const SSLCommerz_API = "https://sandbox.sslcommerz.com/gwprocess/v4/api.php";
        const response = await axios.post(SSLCommerz_API, data);
        return {
            url: response.data.GatewayPageURL,
            message: "Verify your payment",
            order,
        };
    }
    catch (error) {
        next(error);
    }
};
export const SPayment = {
    SPayBill,
};
//# sourceMappingURL=payment.service.js.map