import { Product } from "./product.model.js";
import User from "../auth/user.model.js";
import createHttpError from "http-errors";
import cloud from "../../utils/cloudinary.js";
const Add = async (req, payload, next) => {
    const id = req.vendorId;
    const photos = req.files;
    if (!photos) {
        return next(createHttpError(404, "Product image not found"));
    }
    const streamUpload = (buffer) => {
        return new Promise((resolve, reject) => {
            const stream = cloud.uploader.upload_stream({
                folder: "bac_commerce/product",
            }, (err, data) => {
                if (data) {
                    resolve(data);
                }
                else
                    reject(err);
            });
            stream.end(buffer);
        });
    };
    const uploadedImages = await Promise.all(photos.map((image) => streamUpload(image.buffer)));
    const imageUrls = uploadedImages.map((r) => r.secure_url);
    const imagePublicIds = uploadedImages.map((r) => r.public_id);
    return await Product.create({
        ...payload,
        seller: id,
        images: { imageUrls, imagePublicIds },
    });
};
const Get = async (req) => {
    const { pageNumber = 1, limit = 20, minPrice, maxPrice, search = "", category, } = req.query;
    let query = {};
    const page = Number(pageNumber);
    const pageSize = Number(limit);
    if (search) {
        const regex = new RegExp(search, "i");
        query = { $or: [{ name: regex }, { description: regex }] };
    }
    if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice)
            query.price.$gte = Number(minPrice);
        if (maxPrice)
            query.price.$lte = Number(maxPrice);
    }
    if (category) {
        query.category = category;
    }
    const totalProduct = await Product.countDocuments(query);
    const result = await Product.find(query)
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ createdAt: -1 });
    return {
        products: result,
        success: true,
        totalProduct,
        totalPages: Math.ceil(totalProduct / pageSize),
        currentPage: page,
    };
};
const GetOne = async (id) => {
    return await Product.findById(id);
};
const Update = async (req, id, payload, next) => {
    const vendorId = req.vendorId;
    const product = await Product.findOne({ _id: id, seller: vendorId });
    if (!product) {
        return next(createHttpError(404, "Product Not Found or vendor didn't matched"));
    }
    return await Product.findByIdAndUpdate(id, payload, { new: true });
};
const Delete = async (req, id, next) => {
    const vendorId = req.vendorId;
    const product = await Product.findOne({ _id: id, seller: vendorId });
    if (!product) {
        return next(createHttpError(404, "Product Not Found or vendor didn't matched"));
    }
    if (product.images?.imagePublicIds?.length > 0) {
        await Promise.all(product.images.imagePublicIds.map((publicId) => cloud.uploader.destroy(`bac_commerce/product/${publicId}`)));
    }
    return await Product.findByIdAndDelete(id);
};
export const PService = { Add, Get, GetOne, Update, Delete };
//# sourceMappingURL=product.service.js.map