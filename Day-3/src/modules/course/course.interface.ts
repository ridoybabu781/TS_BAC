import { Types } from "mongoose";

export interface ICourse {
  _id?: string;
  courseId: string;
  title: string;
  slug: string;
  category: Types.ObjectId;
  type: string;
  thumbnail?: string;
  fee: string;
  rating?: number;
  totalRating?: number;
  totalStudentEnroll?: number;
  mentors: Types.ObjectId[];
  courseStart: Date;
  duration?: number;
  lectures: number;
  totalExam?: number;
  totalProject?: number;
  courseDetails: string;
  courseOverview?: string;
  curriculum: string[];
  courseIncludes: string[];
  softwareIncludes: string[];
  jobOption: string[];
}
