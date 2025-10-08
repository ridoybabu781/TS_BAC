import type { Request, Response, NextFunction } from "express";
export const handleError = async (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error) {
    return res
      .status(error.status || 500)
      .json({
        success: false,
        message: error.message || "Internal Server Error",
      });
  }
};
