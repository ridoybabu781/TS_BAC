import { model, Schema } from "mongoose";
const PricingSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    features: [
        {
            type: String,
            required: true,
        },
    ],
    duration: {
        type: String,
        required: true,
    },
});
export const Pricing = model("Pricing", PricingSchema);
//# sourceMappingURL=pricingPlan.model.js.map