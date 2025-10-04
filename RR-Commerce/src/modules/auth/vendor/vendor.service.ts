import type { NextFunction } from "express";
import type { IBaseUser } from "../user.interface.js";
import User from "../user.model.js";
import createHttpError from "http-errors";
import { sendMail } from "../../../utils/sendMail.js";

const VCreate = async (payload: IBaseUser) => {
  return await User.create(payload);
};

const VBlock = async (id: string, next: NextFunction) => {
  const user = await User.findById(id);
  if (!user || user.role !== "user") {
    return next(createHttpError(400, "You're not allowed to block this user "));
  }

  user.isBlocked = true;

  await user.save();

  await sendMail(
    user.email,
    "You're account has been blocked by admin",
    `
        
    `
  );
};

export const VService = {
  VCreate,
  VBlock,
};
