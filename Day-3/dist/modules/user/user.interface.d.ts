type UserRole = "student" | "mentor" | "admin";
type UserStatus = "active" | "blocked" | "pending";
export interface IUser {
    _id?: string;
    password: string;
    isPasswordChanged?: boolean;
    role: UserRole;
    status: UserStatus;
    isDeleted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export {};
//# sourceMappingURL=user.interface.d.ts.map