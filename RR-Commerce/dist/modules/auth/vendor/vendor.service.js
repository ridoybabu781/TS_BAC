import User from "../user.model.js";
import createHttpError from "http-errors";
import { sendMail } from "../../../utils/sendMail.js";
const VCreate = async (payload) => {
    return await User.create(payload);
};
const VBlock = async (id, next) => {
    const user = await User.findById(id);
    if (!user || user.role !== "user") {
        return next(createHttpError(400, "You're not allowed to block this user "));
    }
    user.isBlocked = true;
    await user.save();
    await sendMail(user.email, "You're account has been blocked by admin", `
        
    `);
};
export const VService = {
    VCreate,
    VBlock,
};
//# sourceMappingURL=vendor.service.js.map