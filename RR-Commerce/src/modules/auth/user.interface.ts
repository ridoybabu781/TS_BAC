import type { IAdmin } from "./admin/admin.interface.js";
import type { IVendor } from "./vendor/vendor.interface.js";

type Role = "user" | "vendor" | "admin";

type Address = {
  street: String;
  city: String;
  state: String;
  zip: String;
  country: String;
};

export interface IBaseUser extends IVendor, IAdmin {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  profileImg?: String;
  isBlocked?: boolean;
  isDeleted?: boolean;
  address?: Address;
  phone?: number;
  countryCode?: string;
  refreshToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
