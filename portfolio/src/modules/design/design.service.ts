import type { NextFunction, Request } from "express";
import type { IDesign } from "./design.interface.js";
import { Design } from "./design.model.js";
import createHttpError from "http-errors";
import cloud from "../../utils/cloudinary.js";

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

const SDeleteDesign = async (id: string, next: NextFunction) => {
  const design = await Design.findById(id);

  if (!design) {
    return next(createHttpError(404, "Design not found"));
  }

  await cloud.uploader.destroy(
    `bac_portfolio/design/${design?.image?.imagePublicId}`
  );

  return await Design.findByIdAndDelete(id);
};

export const DService = {
  SCreateDesign,
  SGetDesigns,
  SGetDesign,
  SDeleteDesign,
};
