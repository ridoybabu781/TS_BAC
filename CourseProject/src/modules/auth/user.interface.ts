type Address = {
  village: string;
  postOffice: string;
  upazila: string;
  district: string;
};

export interface IUser {
  _id?: string;
  id: string;
  password: string;
  isPasswordChanged?: boolean;
  role: "student" | "mentor" | "admin";
  status: "active" | "blocked" | "pending";
  isDeleted?: boolean;
  address?: Address;
  profileImg?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IStudent extends IUser {
  guardian?: string;
  courseName?: string;
}

export interface IInstructor extends IUser {
  designation?: string;
  departmentName?: string;
  specialized_area?: string[];
  education_qualification?: string[];
  workExperience?: string[];
  experienceYears?: string;
  experienceTrainedStudents?: string;
  reviews?: number;
  bio?: string;
  lifeJourney?: string;
}

export interface IAdmin extends IUser {
  managementDepartment?: string;
}
