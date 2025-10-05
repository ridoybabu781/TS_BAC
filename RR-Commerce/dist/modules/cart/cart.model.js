import { required } from "joi";
import { model, Schema } from "mongoose";
const cartItemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, required: true, ref: "Product" },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
}, { _id: false });
const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    items: {
        type: [cartItemSchema],
        required: true,
        default: [],
    },
    totalPrice: {
        type: Number,
        required: true,
    },
});
export const Cart = model("Cart", cartSchema);
//# sourceMappingURL=cart.model.js.map