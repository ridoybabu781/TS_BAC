import { model, Schema } from "mongoose";
const userModel = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    role: {
        type: String,
        enum: ["user", "vendor", "admin"],
        required: true,
    },
    profileImg: String,
    isBlocked: Boolean,
    isDeleted: Boolean,
    sector: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    },
    phone: Number,
    countryCode: {
        type: String,
    },
    companyName: String,
    isVerified: Boolean,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    isVendor: {
        type: Boolean,
        default: false,
    },
});
const User = model("User", userModel);
export default User;
//# sourceMappingURL=user.model.js.map