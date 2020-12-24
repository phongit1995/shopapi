import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AttendancesSchema = new Schema({
    dateCheck: Date,
    status: Boolean,
    note: String,
    workingHours: Number,
    checkInAt: Date,
    checkOutAt: Date,
    userId: Number,
    createAt: { type: Date, default: Date.now },
    isDisable: {
        type: Boolean,
        default: false
    }
});