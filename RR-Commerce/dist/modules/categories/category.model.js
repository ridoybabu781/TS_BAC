import { model, Schema } from "mongoose";
const categoryModel = new Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
    },
});
export const Category = model("Category", categoryModel);
//# sourceMappingURL=category.model.js.map