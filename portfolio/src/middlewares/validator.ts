import type { NextFunction, Request, Response } from "express";

export const Validator = (schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req.body, {
      abortEarly: false,
      errors: { wrap: { label: "" } },
    });
    if (result.error) {
      return res
        .status(400)
        .json({ error: result.error.details.map((err) => err.message) });
    }
    next();
  };
};
