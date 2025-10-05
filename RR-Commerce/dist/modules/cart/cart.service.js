import { Cart } from "./cart.model.js";
const SAddToCart = async (req) => {
    return await Cart.create({ ...req.body, user: req.userId });
};
const SGetCartItems = async (req) => {
    return await Cart.find({ user: req.userId });
};
const SRemoveCartItem = async (req) => {
    return await Cart.findByIdAndDelete(req.params.id);
};
export const CService = {
    SAddToCart,
    SGetCartItems,
    SRemoveCartItem,
};
//# sourceMappingURL=cart.service.js.map