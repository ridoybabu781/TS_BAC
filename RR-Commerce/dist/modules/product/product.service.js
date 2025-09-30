import { Product } from "./product.model.js";
const Add = async (payload) => {
    return await Product.create(payload);
};
const Get = async () => {
    return await Product.find();
};
const GetOne = async (id) => {
    return await Product.findById(id);
};
const Update = async (id, payload) => {
    return await Product.findByIdAndUpdate(id, payload, { new: true });
};
const Delete = async (id) => {
    return await Product.findByIdAndDelete(id);
};
export const PService = { Add, Get, GetOne, Update, Delete };
//# sourceMappingURL=product.service.js.map