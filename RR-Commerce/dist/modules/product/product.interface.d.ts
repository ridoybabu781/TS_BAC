export interface IProduct {
    _id?: string;
    slag: string;
    productId?: string;
    name: string;
    description: string;
    price: number;
    discountPrice?: number;
    stock: number;
    images: string[];
    brand?: string;
    categories: string[];
    rating?: number;
    totalReview?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=product.interface.d.ts.map