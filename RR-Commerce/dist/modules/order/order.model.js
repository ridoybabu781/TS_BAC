import { model, Schema } from "mongoose";
import { required } from "joi";
const OrderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    items: {
        products: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true, default: 1 },
    },
    totalPrice: { type: Number, required: true },
    status: {
        type: String,
        required: true,
        enum: ["pending", "paid", "shipped", "completed", "canceled"],
        default: "pending",
    },
    paymentMethod: {
        type: String,
        enum: ["cod", "sslcommerz"],
        default: "cod",
        required: true,
    },
    shippingAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        postalCode: { type: String, required: true },
    },
    phone: {
        type: String,
        required: true,
    },
    transactionId: { type: String },
    paymentStatus: {
        type: String,
        enum: ["unpaid", "paid", "failed"],
        default: "unpaid",
    },
}, { timestamps: true });
export const Order = model("Order", OrderSchema);
//# sourceMappingURL=order.model.js.map