import type { IAdmin } from "./admin/admin.interface.js";
import type { IMentor } from "./mentor/mentor.interface.js";
import type { IStudent } from "./student/student.interface.js";

type UserRole = "student" | "mentor" | "admin";
type UserStatus = "active" | "blocked" | "pending" | "inactive";

export interface IBaseUser extends IMentor, IAdmin, IStudent {
  _id?: string;
  role: UserRole;
  status: UserStatus;

  password: string;
  isPasswordChanged?: boolean;

  name: { type: String; required: true };
  gender: { type: String; enum: ["male", "female", "other"]; required: true };
  dateOfBirth: String;
  email: { type: String; required: true; unique: true };
  contactNo: String;
  emergencyContact: String;
  address: String;
  profileImg: String;

  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
