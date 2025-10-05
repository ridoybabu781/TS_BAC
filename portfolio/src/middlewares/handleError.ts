import type { NextFunction, Request, Response } from "express";

export const handleError = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    res.status(err.status || 500).json({
      message: err.message || "Internal Server Error",
    });
  }
};

