import type { Types } from "mongoose";
export interface IDesign {
    _id?: Types.ObjectId;
    title: string;
    description: string;
    category: Types.ObjectId;
    image: {
        imageUrl: string;
        imagePublicId: string;
    };
    designerName: string;
    usedTools: string[];
    effectsUsed: string[];
    price: number;
    complexityLevel: "Basic" | "Intermediate" | "Advanced";
    tags: string[];
    status: "Active" | "Draft" | "Archived";
    likeCount?: number;
    favouritesCount?: number;
    downloadCount?: number;
    purchaseCount?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=design.interface.d.ts.map