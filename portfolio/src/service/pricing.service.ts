import type { IPricing } from "../interfaces/pricingPlan.interface.js";
import { Pricing } from "../models/pricingPlan.model.js";

const SCreatePricing = async (payload: IPricing) => {
  return await Pricing.create(payload);
};

const SGetPricings = async () => {
  return await Pricing.find();
};

const SGetPricing = async (id: string) => {
  return await Pricing.findById(id);
};
const SDeletePricing = async (id: string) => {
  return await Pricing.findByIdAndDelete(id);
};

export const PService = {
  SCreatePricing,
  SGetPricing,
  SGetPricings,
  SDeletePricing,
};
