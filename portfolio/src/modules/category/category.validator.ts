import Joi from "joi";

export const VCategorySchema = Joi.object({
  name: Joi.string().required(),
});
