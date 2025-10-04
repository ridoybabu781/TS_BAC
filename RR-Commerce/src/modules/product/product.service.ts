import type { NextFunction, Request } from "express";
import type { IProduct } from "./product.interface.js";
import { Product } from "./product.model.js";
import User from "../auth/user.model.js";
import createHttpError from "http-errors";
import cloud from "../../utils/cloudinary.js";

const Add = async (req: Request, payload: IProduct, next: NextFunction) => {
  const id = req.vendorId;

  const photos = req.files as Express.Multer.File[];

  if (!photos) {
    return next(createHttpError(404, "Product image not found"));
  }

  const streamUpload = (buffer) => {
    return new Promise((resolve, reject) => {
      const stream = cloud.uploader.upload_stream(
        {
          folder: "bac_commerce/product",
        },
        (err, data) => {
          if (data) {
            resolve(data);
          } else reject(err);
        }
      );
      stream.end(buffer);
    });
  };

  const uploadedImages = await Promise.all(
    photos.map((image: Express.Multer.File) => streamUpload(image.buffer))
  );

  const imageUrls = uploadedImages.map((r) => r.secure_url);
  const imagePublicIds = uploadedImages.map((r) => r.public_id);

  return await Product.create({
    ...payload,
    seller: id,
    images: { imageUrls, imagePublicIds },
  });
};

const Get = async () => {
  return await Product.find();
};

const GetOne = async (id: string) => {
  return await Product.findById(id);
};

const Update = async (
  req: Request,
  id: string,
  payload: IProduct,
  next: NextFunction
) => {
  const vendorId = req.vendorId;
  const product = await Product.findOne({ _id: id, seller: vendorId });

  if (!product) {
    return next(
      createHttpError(404, "Product Not Found or vendor didn't matched")
    );
  }

  return await Product.findByIdAndUpdate(id, payload, { new: true });
};

const Delete = async (req: Request, id: string, next: NextFunction) => {
  const vendorId = req.vendorId;

  const product = await Product.findOne({ _id: id, seller: vendorId });

  if (!product) {
    return next(
      createHttpError(404, "Product Not Found or vendor didn't matched")
    );
  }

  if (product.images?.imagePublicIds?.length > 0) {
    await Promise.all(
      product.images.imagePublicIds.map((publicId) =>
        cloud.uploader.destroy(`bac_commerce/product/${publicId}`)
      )
    );
  }

  return await Product.findByIdAndDelete(id);
};

export const PService = { Add, Get, GetOne, Update, Delete };
