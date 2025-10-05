import Joi from "joi";
import type { IUser } from "../interfaces/user.interface.js";
export const VUserSchema = Joi.object({
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  role: Joi.string().valid("user", "admin").required().default("user"),
});

export const VLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});
