import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    slag: { type: String, required: true, unique: true },
    name: {
        type: String,
        required: true,
    },
    stock: { type: Number, required: true },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountPrice: Number,
    images: {
        imageUrls: [
            {
                type: String,
                required: true,
            },
        ],
        imagePublicIds: [
            {
                type: String,
                required: true,
            },
        ],
    },
    brand: String,
    categories: [
        {
            type: String,
            required: true,
        },
    ],
    rating: Number,
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
}, {
    timestamps: true,
});
export const Product = mongoose.model("Product", productSchema);
//# sourceMappingURL=product.model.js.map