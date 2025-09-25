import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    avater: { type: String },
    password: { type: String, required: true, select: false },
});
const User = mongoose.model("User", userSchema);
export default User;
//# sourceMappingURL=user.model.js.map