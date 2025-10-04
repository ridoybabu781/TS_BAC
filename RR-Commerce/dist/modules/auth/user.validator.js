import joi from "joi";
export const VCreateUser = joi.object({
    name: joi.string().min(3).required().trim(),
    email: joi.string().email().required().lowercase(),
    password: joi.string().required().min(6),
    role: joi.string().required().valid("user"),
});
export const VLogin = joi.object({
    email: joi.string().email().required().trim(),
    password: joi.string().required(),
});
export const VUpdate = joi.object({
    name: joi.string().min(3).required().trim(),
    email: joi.string().email().required().lowercase(),
    password: joi.string().required().min(6),
    sector: joi.string(),
    address: joi.object({
        street: joi.string(),
        city: joi.string(),
        state: joi.string(),
        country: joi.string(),
        zip: joi.string(),
    }),
    phone: joi.number().min(8).max(14),
    countryCode: joi.string(),
    companyName: joi.string(),
    products: joi.array(),
});
//# sourceMappingURL=user.validator.js.map