import User from "./user.model.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
const UCreate = async (payload) => {
    const hashedPass = await bcrypt.hash(payload.password, 10);
    return await User.create({ ...payload, password: hashedPass });
};
const ULogin = async (email, password, next) => {
    const user = await User.findOne({ email });
    if (!user) {
        return next(createHttpError(404, "User Not Found"));
    }
    if (user.role === "vendor" &&
        (user.isBlocked || user.isDeleted || user.isVendor !== "yes")) {
        return next(createHttpError(401, "Your'e not allowed to login"));
    }
    if (user.isDeleted) {
        return next(createHttpError(400, "Your account is deleted"));
    }
    const isPassMatched = await bcrypt.compare(password, user.password);
    if (!isPassMatched) {
        return next(createHttpError(400, "Password didn't matched"));
    }
    const userData = user.toObject();
    delete userData.password;
    return userData;
};
const UProfile = async (userId) => {
    return await User.findById(userId).select("-password");
};
const UUpdate = async (id, payload) => {
    return await User.findByIdAndUpdate(id, payload, { new: true });
};
const UDelete = async (id) => {
    return await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};
export const SUser = {
    UCreate,
    ULogin,
    UProfile,
    UUpdate,
    UDelete,
};
//# sourceMappingURL=user.service.js.map