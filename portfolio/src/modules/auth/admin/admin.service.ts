import bcrypt from "bcrypt";
import type { IUser } from "../user/user.interface.js";
import { User } from "../user/user.model.js";

const ACreate = async (payload: IUser) => {
  const hashedPass = await bcrypt.hash(payload.password, 10);

  return await User.create({ ...payload, password: hashedPass });
};

export const SAdmin = { ACreate };
