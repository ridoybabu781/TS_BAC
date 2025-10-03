import User from "./user.model.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
const UCreate = async (payload) => {
    return await User.create(payload);
};
const ULogin = async (email, password, next) => {
    const user = await User.findOne(email);
    if (!user) {
        return next(createHttpError(404, "User Not Found"));
    }
    if (user.role === "vendor" &&
        !user.isBlocked &&
        !user.isDeleted &&
        !user.isVendor) {
        return next(createHttpError(401, "Your'e not allowed to login"));
    }
    const isPassMatched = await bcrypt.compare(user.password, password);
    if (!isPassMatched) {
        return next(createHttpError(400, "Password didn't matched"));
    }
    const userData = user.toObject();
    delete userData.password;
    return userData;
};
export const SUser = {
    UCreate,
    ULogin,
};
//# sourceMappingURL=user.service.js.map