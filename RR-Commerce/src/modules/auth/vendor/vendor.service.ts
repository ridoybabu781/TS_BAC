import type { IBaseUser } from "../user.interface.js";
import User from "../user.model.js";

const VCreate = async (payload: IBaseUser) => {
  return await User.create(payload);
};

export const VService = {
  VCreate
}