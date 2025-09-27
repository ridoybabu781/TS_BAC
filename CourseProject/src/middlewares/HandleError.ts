import { Request, Response, NextFunction } from "express";

export interface AppError extends Error {
  status?: number;
  data?: any;
}

export const HandleError = async (err, req, res, next) => {
  res.status(err.status).json({
    message: err.data || "Internal server error",
  });
};
