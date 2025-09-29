import type { Request, Response, NextFunction } from "express";

export interface AppError extends Error {
  status?: number;
  data?: any;
}

export const HandleError = async (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error: unknown) {
    next(error);
  }
};
