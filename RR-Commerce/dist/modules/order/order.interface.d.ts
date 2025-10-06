import type { Document, Types } from "mongoose";
type Item = {
    products: Types.ObjectId[];
    qty: number;
    price: number;
};
type address = {
    street: string;
    city: string;
    country: string;
    postalCode: string;
};
export interface IOrder extends Document {
    customer?: Types.ObjectId;
    items: Item;
    totalPrice: number;
    status: "pending" | "paid" | "shipped" | "completed" | "canceled";
    paymentMethod: "cod" | "sslcommerz";
    shippingAddress: address;
    phone: string;
    transactionId?: string;
    paymentStatus: "unpaid" | "paid" | "failed";
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=order.interface.d.ts.map