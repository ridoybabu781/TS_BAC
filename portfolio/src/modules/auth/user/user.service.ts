import type { NextFunction } from "express";
import bcrypt from "bcrypt";
import createHttpError from "http-errors";
import type { IUser } from "./user.interface.js";
import { User } from "./user.model.js";

const UCreate = async (payload: IUser, next: NextFunction) => {
  if (payload.role === "admin") {
    return next(createHttpError(401, "Admin cannot be created with this api"));
  }
  const hashedPass = await bcrypt.hash(payload.password, 10);

  return await User.create({ ...payload, password: hashedPass });
};

const ULogin = async (email: String, password: String, next: NextFunction) => {
  const user = await User.findOne({ email });
  if (!user) {
    return next(createHttpError(404, "User Not Found"));
  }

  const isPassMatched: boolean = await bcrypt.compare(
    password as string,
    user.password
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

export const UService = {
  UCreate,
  ULogin,
  UProfile,
};
