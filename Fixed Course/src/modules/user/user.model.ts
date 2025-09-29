import type { Model } from "mongoose";
import mongoose, { Schema } from "mongoose";
import type { IBaseUser } from "./baseUser.interface.js";

const userSchema = new Schema<IBaseUser>(
  {
    // Common fields
    name: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    dateOfBirth: String,
    email: { type: String, required: true, unique: true },
    contactNo: String,
    emergencyContact: String,
    address: String,
    profileImg: String,
    password: { type: String, required: true },
    isPasswordChanged: { type: Boolean, default: false },

    role: {
      type: String,
      enum: ["student", "mentor", "admin"],
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "blocked", "pending", "inactive"],
      default: "pending",
    },

    isDeleted: { type: Boolean, default: false },

    // Student
    guardian: String,
    courseName: String,

    // Mentor
    designation: String,
    departmentName: String,
    specialized_area: [String],
    education_qualification: [String],
    workExperience: [String],
    experienceYears: String,
    experienceTrainedStudents: String,
    reviews: { type: Number, default: 0 },
    bio: String,
    lifeJourney: String,

    // Admin
    managementDepartment: String,
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", userSchema);
