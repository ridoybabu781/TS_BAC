import Joi from "joi";

export const VDesignSchema = Joi.object({
  title: Joi.string().required().trim(),
  desctiption: Joi.string().required(),
  category: Joi.string().required(),
  designerName: Joi.string().required(),
  usedTools: Joi.array().items(Joi.string()).required().min(1),
  effectsUsed: Joi.array().items(Joi.string()).required().min(1),
  price: Joi.number().required(),
  tags: Joi.array().items(Joi.string()),
  complexityLevel: Joi.string()
    .valid("Basic", "Intermediate", "Advanced")
    .required()
    .default("Basic"),
  status: Joi.string()
    .valid("Active", "Draft", "Archived")
    .required()
    .default("Active"),
});
