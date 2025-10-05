import { CService } from "./cart.service.js";
import createHttpError from "http-errors";
export const addToCart = async (req, res, next) => {
    try {
        const cart = await CService.SAddToCart(req);
        if (!cart) {
            return next(createHttpError(400, "Failed to add cart"));
        }
        res.status(201).json({ message: "Added to cart successfully", cart });
    }
    catch (error) {
        next(error);
    }
};
export const getCartItems = async (req, res, next) => {
    try {
        const cartItems = await CService.SGetCartItems(req);
        if (cartItems.length === 0) {
            return next(createHttpError(404, "No item found"));
        }
        res.status(200).json({
            message: "Item fetched successfully",
            cartItems,
        });
    }
    catch (error) {
        next(error);
    }
};
export const removeCartItem = async (req, res, next) => {
    try {
        const deletedItem = await CService.SRemoveCartItem(req);
        if (!deletedItem) {
            return next(createHttpError(400, "Failed to remove from cart"));
        }
        res
            .status(200)
            .json({ message: "Item removed from cart successfully", deletedItem });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=cart.controller.js.map