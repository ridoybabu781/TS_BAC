import type { Types } from "mongoose";

interface ICourse {
  courseId: string;
  title: string;
  thumbnail: string;
  about: string;
  batchNo: number;
  category: Types.ObjectId;
  instructors?: Types.ObjectId[];
  slug: string;
  batchType: string;
  price: number;
  rating?: number;
  TotalRating?: number;
  studentCount?: number;
  duration?: string;
  lessonCount?: number;
  completedLearner?: number;
  curriculum?: string[];
  softwareIncludes: string[];
  whatWillLearn: string[];
  forWhom: string[];
  discount?: number;
  enrollmentStartAt: Date;
  enrollmentEndsIn: Date;
  courseStartingDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type { ICourse };
