import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  avater: { type: String },
  status:{
    type:String,
    enum:[""],
    default:"pending"
  },
  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
    default: "student",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
