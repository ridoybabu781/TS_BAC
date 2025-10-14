import { model, Schema } from "mongoose";
const categoryModel = new Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        iconUrl: {
            type: String,
            required: true,
        },
        iconPublicId: { type: String, required: true },
    },
});
export const Category = model("Category", categoryModel);
//# sourceMappingURL=category.model.js.map