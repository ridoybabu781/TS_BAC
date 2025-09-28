import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    // userId: {
    //     type: String,
    // },
    password: { type: String },
    isPasswordChanged: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["student", "mentor", "admin"],
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "blocked", "pending"],
      default: "pending",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const userModel = model<IUser>("user", userSchema);
