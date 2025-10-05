import createHttpError from "http-errors";
import cloud from "../utils/cloudinary.js";
import { Category } from "../models/category.model.js";
const Add = async (req, payload, next) => {
    const icon = req.file;
    if (!icon) {
        return next(createHttpError(404, "Icon not found"));
    }
    const iconUploadStream = (buffer) => {
        return new Promise((resolve, reject) => {
            const stream = cloud.uploader.upload_stream({ folder: "bac_commerce/categoryIcon" }, (err, data) => {
                if (data)
                    resolve(data);
                else
                    reject(err);
            });
            stream.end(buffer);
        });
    };
    const result = await iconUploadStream(icon.buffer);
    const iconUrl = result.secure_url;
    const iconPublicId = result.public_id;
    return await Category.create({ ...payload, icon: { iconUrl, iconPublicId } });
};
const Get = async () => {
    return await Category.find();
};
const Delete = async (id) => {
    const category = await Category.findById(id);
    const iconPublicId = category?.icon.iconPublicId;
    await cloud.uploader.destroy(`bac_commerce/categoryIcon/${iconPublicId}`);
    return await Category.findByIdAndDelete(id);
};
export const CService = { Add, Get, Delete };
//# sourceMappingURL=category.service.js.map