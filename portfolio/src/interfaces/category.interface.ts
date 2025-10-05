import type { Types } from "mongoose";

export interface ICategory {
  _id?: Types.ObjectId;
  name: string;
  icon: {
    iconUrl: String;
    iconPublicId: String;
  };
}
