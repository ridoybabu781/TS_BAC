import { PService } from "./product.service.js";
export const addProduct = async (req, res, next) => {
    try {
        const product = await PService.Add(req.body);
        if (!product) {
            return res.status(400).json({ message: "Product creation failed" });
        }
        res.status(201).json({ message: "Product created successfully" });
    }
    catch (error) {
        next(error);
    }
};
export const getProducts = async (req, res, next) => {
    try {
        const products = await PService.Get();
        if (!products) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        res.status(200).json({ message: "Product fetched successfully", products });
    }
    catch (error) {
        next(error);
    }
};
export const getProduct = async (req, res, next) => {
    try {
        const product = await PService.GetOne(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        res.status(200).json({ message: "Product fetched successfully", product });
    }
    catch (error) {
        next(error);
    }
};
export const updateProduct = async (req, res, next) => {
    try {
        const product = await PService.Update(req.params.id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product updation failed" });
        }
        res.status(200).json({ message: "Product updated successfully", product });
    }
    catch (error) {
        next(error);
    }
};
export const deleteProduct = async (req, res, next) => {
    try {
        const product = await PService.Delete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product deletion failed" });
        }
        res.status(200).json({ message: "Product deleted successfully", product });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=product.controller.js.map