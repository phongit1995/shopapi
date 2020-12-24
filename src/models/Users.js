import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UsersSchema = new Schema({
    fullName: String,
    imgPath: String,
    pin: String,
    dob: Date,
    homeAddress: String,
    grossSalary: Number,
    netSalary: Number,
    note: String,
    departmentId: Number,
    roleId: {
        type:Number,
        default:1
    },
    createAt: { type: Date, default: Date.now },
    isDisable: {
        type: Boolean,
        default: false
    }
});