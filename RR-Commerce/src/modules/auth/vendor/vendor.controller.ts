import type { NextFunction, Request, Response } from "express";

export const createVendot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
      const user = await VService.VCreate(req.body)
  } catch (error) {
    next(error);
  }
};
