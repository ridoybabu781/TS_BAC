import type { NextFunction } from "express";
import type { IBaseUser } from "./user.interface.js";
import User from "./user.model.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

const UCreate = async (payload: IBaseUser) => {
  return await User.create(payload);
};

const ULogin = async (email: String, password: String, next: NextFunction) => {
  const user = await User.findOne(email);
  if (!user) {
    return next(createHttpError(404, "User Not Found"));
  }

  if (
    user.role === "vendor" &&
    !user.isBlocked &&
    !user.isDeleted &&
    !user.isVendor
  ) {
    return next(createHttpError(401, "Your'e not allowed to login"));
  }

  const isPassMatched: boolean = await bcrypt.compare(
    user.password,
    password as string
  );
  if (!isPassMatched) {
    return next(createHttpError(400, "Password didn't matched"));
  }

  const userData = user.toObject();
  delete userData.password;

  return userData;
};

const UProfile = async (userId: string) => {
  return await User.findById(userId).select("-password");
};
const UUpdate = async (id: string, payload: IBaseUser, next: NextFunction) => {
  return await User.findByIdAndUpdate(id, payload, { new: true });
};

export const SUser = {
  UCreate,
  ULogin,
  UProfile,
  UUpdate,
};
