import { model, Schema } from "mongoose";
const purchaseSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    design: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Design",
    },
    selectedPricing: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Pricing",
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "cancelled"],
        required: true,
        default: "pending",
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
});
export const Purchase = model("Purchase", purchaseSchema);
//# sourceMappingURL=purchase.model.js.map