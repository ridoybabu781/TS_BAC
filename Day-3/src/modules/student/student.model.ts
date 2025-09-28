import { model, Schema } from "mongoose";
import { IStudent } from "./student.interface";

const studentSchema = new Schema<IStudent>({
    _id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    contactNo: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    guardian: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
}, { timestamps: true })


export const StudentModel = model('student', studentSchema)