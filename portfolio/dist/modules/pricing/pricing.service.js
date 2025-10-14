import { Pricing } from "./pricingPlan.model.js";
const SCreatePricing = async (payload) => {
    return await Pricing.create(payload);
};
const SGetPricings = async () => {
    return await Pricing.find();
};
const SGetPricing = async (id) => {
    return await Pricing.findById(id);
};
const SDeletePricing = async (id) => {
    return await Pricing.findByIdAndDelete(id);
};
export const PService = {
    SCreatePricing,
    SGetPricing,
    SGetPricings,
    SDeletePricing,
};
//# sourceMappingURL=pricing.service.js.map