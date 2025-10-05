import type { Types } from "mongoose";
export interface IReview {
    _id?: Types.ObjectId;
    reviewer?: Types.ObjectId;
    design?: Types.ObjectId;
    rating: number;
    comment: string;
    createdAt?: Date;
}
//# sourceMappingURL=review.interface.d.ts.map