import type { NextFunction, Request, Response } from "express";

import type { IPricing } from "./pricingPlan.interface.js";
import createHttpError from "http-errors";
import { PService } from "./pricing.service.js";

export const createPricing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pricing = await PService.SCreatePricing(req.body as IPricing);
    if (!pricing) {
      return next(createHttpError(400, "Pricing creation failed"));
    }
    res.status(201).json({ message: "Pricing created successfully" });
  } catch (error) {
    next(error);
  }
};

export const getPricing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pricing = await PService.SGetPricing(req.params.id as string);
    if (!pricing) {
      return next(createHttpError(404, "Pricing not found"));
    }
    res.status(200).json({ message: "Pricing fetched successfull", pricing });
  } catch (error) {
    next(error);
  }
};

export const getPricings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pricings = await PService.SGetPricings();
    if (!pricings) {
      return next(createHttpError(404, "No pricing found"));
    }
    res.status(200).json({ message: "Pricing fetched successfull", pricings });
  } catch (error) {
    next(error);
  }
};

export const deletePricing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pricing = await PService.SDeletePricing(req.params.id as string);
    if (!pricing) {
      return next(createHttpError(404, "Pricing not found"));
    }
    res.status(200).json({ message: "Pricing deleted successfully", pricing });
  } catch (error) {
    next(error);
  }
};
