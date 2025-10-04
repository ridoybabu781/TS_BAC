import joi from "joi";

export const VCreateVendor = joi.object({
  name: joi.string().min(3).required().trim(),
  email: joi.string().email().required().lowercase(),
  password: joi.string().required().min(6),
  role: joi.string().required().valid("vendor"),
});
