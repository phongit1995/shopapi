import mongoose from 'mongoose';
import { AttendancesSchema } from '../models/Attendances'
const Attendances = mongoose.model('Attendances', AttendancesSchema);
import {UsersSchema} from '../models/Users'
const Users = mongoose.model('Users', UsersSchema)
export const AddNewAttendance = (req, res) => {
    let newAttendance = new Attendances(req.body);
    newAttendance.save((err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json(attendance)
    })
}
export const GetAttendances = (req, res) => {
    if(req.query.id){
        Attendances.find({user:req.query.id}).populate({
            path:"user"
        }).sort({createdAt:-1}).then((value)=>res.json(value)).catch(error=>res.send(error))
    }
    else {
        Attendances.find({}).populate({
            path:"user"
        }).sort({createdAt:-1}).then((value)=>res.json(value)).catch(error=>res.send(error))
    }

}
export const GetAttendancesSalary = (req, res) => {
    if(req.query.id){
        Attendances.find({user:req.query.id,checkOut:{$exists:true}}).populate({
            path:"user"
        }).sort({createdAt:-1}).then((value)=>res.json(value)).catch(error=>res.send(error))
    }
    else {
        Attendances.find({checkOut:{$exists:true}}).populate({
            path:"user"
        }).sort({createdAt:-1}).then((value)=>res.json(value)).catch(error=>res.send(error))
    }

}
export const GetAttendanceWithId = (req, res) => {
    Attendances.findById(req.params.attendanceId).populate({path:"user"}).then(result=>res.json(result)).catch((error)=>res.send(error))
}
export const UpdateAttendance = (req, res) => {
    Attendances.findOneAndUpdate({ _id: req.params.attendanceId }, req.body, { new: true, useFindAndModify: false }, (err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json(attendance)
    })
}
export const DeleteAttendance = (req, res) => {
    Attendances.deleteOne({ _id: req.params.attendanceId }, (err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "successfully deleted attendance" })
    })
}
export const CheckIn = (req, res) => {
    let newAttendance = new Attendances(req.body);
    Attendances.findByDateCheck(req.params.dateCheck, (err, attendance) =>{
        if(!err){
            res.send("User has already checked in!");
        }
    });
    newAttendance.save((err, attendance) => {
        if (err) {
          res.send(err);
        }
        res.json(attendance);
      });
}
export const CheckOut = (req, res) => {
    // Attendances.findOneAndUpdate({
    //     _id: req.params.attendanceId
    // },
    // req.body,
    // {
    //     new: true, useFindAndModify: false, 
    // },
    // (err, attendance) => {
    //     if(err){
    //         res.send(err);
    //     }
    //     res.json(attendance);
    // });
    Attendances.findByIdAndUpdate(req.params.id,{
        checkOut:Date.now()
    },{new: true, useFindAndModify: false, }).then(result=>{
        
        res.json(result);
    }).catch(error=>console.log(error))
};