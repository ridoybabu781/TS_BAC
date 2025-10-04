import type { Types } from "mongoose";

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

export interface IOrder {
  customer: Types.ObjectId;
  items: Item;
  totalPrice: number;
  status: "pending" | "paid" | "shipped" | "completed" | "canceled";
  paymentMethod: "cod" | "sslcommerz";
  shippingAddress: address;
  createdAt: Date;
  updatedAt: Date;
}
