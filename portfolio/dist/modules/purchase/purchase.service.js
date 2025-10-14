import { Purchase } from "./purchase.model.js";
const SMakePurchase = async (req, payload) => {
    return await Purchase.create({
        ...payload,
        customer: req.userId,
        design: req.params.id,
    });
};
const SGetMyPurchase = async (id) => {
    return await Purchase.find({ customer: id });
};
export const SPurchase = {
    SMakePurchase,
    SGetMyPurchase,
};
//# sourceMappingURL=purchase.service.js.map