export interface IStudent {
    _id: string;
    name: string;
    gender: 'male' | 'female' | 'other';
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    address: string;
    guardian: string;
    profileImg: string;
    courseName?: string;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=student.interface.d.ts.map