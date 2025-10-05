import type { NextFunction, Request } from "express";
import type { IDesign } from "../interfaces/design.interface.js";
import { Design } from "../models/design.model.js";
import createHttpError from "http-errors";
import cloud from "../utils/cloudinary.js";

const SCreateDesign = async (
  req: Request,
  payload: IDesign,
  next: NextFunction
) => {
  const image = req.file;

  if (!image) {
    return next(createHttpError(404, "Image Not Found"));
  }

  const imageBuffer = (buffer) => {
    return new Promise((resolve, reject) => {
      const stream = cloud.uploader.upload_stream(
        {
          folder: "bac_portfolio/design",
        },
        (err, data) => {
          if (data) resolve(data);
          else reject(err);
        }
      );
      stream.end(buffer);
    });
  };

  const result = await imageBuffer(image.buffer);

  const imageUrl = result.secure_url;
  const imagePublicId = result.public_id;

  return await Design.create({
    ...payload,
    image: { imageUrl, imagePublicId },
  });
};

const SGetDesigns = async () => {
  return await Design.find();
};
const SGetDesign = async (id: string) => {
  return await Design.findById(id);
};

export const DService = {
  SCreateDesign,
  SGetDesigns,
  SGetDesign,
};
