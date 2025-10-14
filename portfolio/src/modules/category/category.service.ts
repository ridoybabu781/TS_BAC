import type { NextFunction, Request } from "express";

import createHttpError from "http-errors";
import type { ICategory } from "./category.interface.js";
import cloud from "../../utils/cloudinary.js";
import { Category } from "./category.model.js";

const Add = async (req: Request, payload: ICategory, next: NextFunction) => {
  const icon = req.file;
  if (!icon) {
    return next(createHttpError(404, "Icon not found"));
  }

  const iconUploadStream = (buffer) => {
    return new Promise((resolve, reject) => {
      const stream = cloud.uploader.upload_stream(
        { folder: "bac_portfolio/categoryIcon" },
        (err, data) => {
          if (data) resolve(data);
          else reject(err);
        }
      );
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

const Delete = async (id: string) => {
  const category = await Category.findById(id);
  const iconPublicId = category?.icon.iconPublicId;

  await cloud.uploader.destroy(`bac_portfolio/categoryIcon/${iconPublicId}`);

  return await Category.findByIdAndDelete(id);
};

export const CService = { Add, Get, Delete };
