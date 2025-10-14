import Joi from "joi";
export const VPricingSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    features: Joi.array().items(Joi.string()).min(1).required(),
    duration: Joi.string().required(),
});
//# sourceMappingURL=pricing.validator.js.map