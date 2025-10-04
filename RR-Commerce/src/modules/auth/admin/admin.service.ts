import type { NextFunction } from "express";
import type { IBaseUser } from "../user.interface.js";
import User from "../user.model.js";
import createHttpError from "http-errors";
import { sendMail } from "../../../utils/sendMail.js";

const ACreate = async (payload: IBaseUser) => {
  return await User.create(payload);
};

const ABlock = async (id: string, next: NextFunction) => {
  const user = await User.findById(id);
  if (!user) {
    return next(createHttpError(400, "user didn't matched "));
  }

  user.isBlocked = true;

  await user.save();

  await sendMail(
    user.email,
    "Your account has been blocked by admin",
    `
        
    `
  );

  return user;
};

const AUnBlock = async (id: string, next: NextFunction) => {
  const user = await User.findById(id);
  if (!user) {
    return next(createHttpError(400, "user didn't matched "));
  }

  user.isBlocked = false;

  await user.save();

  await sendMail(
    user.email,
    "Your account has been unblocked by admin",
    `
        
    `
  );

  return user;
};

const ADelete = async (id: string, next: NextFunction) => {
  const user = await User.findById(id);
  if (!user) {
    return next(createHttpError(400, "user didn't matched "));
  }

  user.isDeleted = true;

  await user.save();
  await sendMail(
    user.email,
    "Your account has been deleted by admin",
    `
        
    `
  );

  return user;
};

const AUnDelete = async (id: string, next: NextFunction) => {
  const user = await User.findById(id);
  if (!user) {
    return next(createHttpError(400, "user didn't matched "));
  }

  user.isDeleted = false;

  await user.save();

  await sendMail(
    user.email,
    "Your account is now reusable",
    `
        
    `
  );

  return user;
};

export const AService = {
  ACreate,
  ABlock,
  AUnBlock,
  ADelete,
  AUnDelete,
};
