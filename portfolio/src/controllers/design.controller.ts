import type { NextFunction, Request, Response } from "express";
import { DService } from "../service/design.service.js";
import type { IDesign } from "../interfaces/design.interface.js";
import createHttpError from "http-errors";

export const createDesign = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const design = await DService.SCreateDesign(
      req as Request,
      req.body as IDesign,
      next as NextFunction
    );
    if (!design) {
      return next(createHttpError(400, "Design Creation Failed"));
    }
    res.status(201).json({ message: "Design created successfully", design });
  } catch (error) {
    next(error);
  }
};
export const getDesigns = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const designs = await DService.SGetDesigns();
    if (designs.length === 0) {
      return next(createHttpError(400, "No design available"));
    }
    res.status(201).json({ message: "Design fetched successfully", designs });
  } catch (error) {
    next(error);
  }
};
export const getDesign = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const design = await DService.SGetDesign(req.params.id as string);
    if (!design) {
      return next(createHttpError(400, "Design not available"));
    }
    res.status(201).json({ message: "Design fetched successfully", design });
  } catch (error) {
    next(error);
  }
};

export const deleteDesign = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const design = await DService.SDeleteDesign(req.params.id as string,next as NextFunction);
    if (!design) {
      return next(createHttpError(400, "Design deletion failed"));
    }
    res.status(201).json({ message: "Design deleted successfully"});
  } catch (error) {
    next(error);
  }
};
