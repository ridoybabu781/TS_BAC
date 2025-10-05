import bcrypt from "bcrypt";
import type { IUser } from "../interfaces/user.interface.js";
import { User } from "../models/user.model.js";

const ACreate = async (payload: IUser) => {
  const hashedPass = await bcrypt.hash(payload.password, 10);

  return await User.create({ ...payload, password: hashedPass });
};

export const SAdmin = { ACreate };
