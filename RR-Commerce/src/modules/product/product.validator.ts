import Joi from "joi";

export const VCreateProduct = Joi.object({
  slag: Joi.string().trim().required(),
  name: Joi.string().required(),
  stock: Joi.number().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  discountPrice: Joi.number().optional(),
  brand: Joi.string().optional(),
  categories: Joi.array().items(Joi.string().required()).min(1).required(),
});

export const VUpdateProduct = Joi.object({
  _id: Joi.string().required(),
  seller: Joi.string().optional(),
  slag: Joi.string().trim().required(),
  name: Joi.string().required(),
  stock: Joi.number().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  discountPrice: Joi.number().optional(),
  brand: Joi.string().optional(),
  categories: Joi.array().items(Joi.string().required()).min(1).required(),
  rating: Joi.number().min(0).max(5).optional(),
  reviews: Joi.array().items(Joi.string()).optional(),
});
