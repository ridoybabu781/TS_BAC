import type { Document, Types } from "mongoose";
export interface IProduct extends Document {
    seller: Types.ObjectId;
    slag: string;
    productId?: string;
    name: string;
    description: string;
    price: number;
    discountPrice?: number;
    stock: number;
    images: {
        imageUrls: string[];
        imagePublicIds: string[];
    };
    brand?: string;
    categories: string[];
    rating?: number;
    reviews?: Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=product.interface.d.ts.map