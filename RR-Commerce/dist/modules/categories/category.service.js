import { Category } from "./category.model.js";
const Add = async (payload) => {
    return await Category.create(payload);
};
const Get = async () => {
    return await Category.find();
};
const Delete = async (id) => {
    return await Category.findByIdAndDelete(id);
};
export const CService = { Add, Get, Delete };
//# sourceMappingURL=category.service.js.map