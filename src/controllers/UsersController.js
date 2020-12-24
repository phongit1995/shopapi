import mongoose from 'mongoose';
import { UsersSchema } from '../models/Users'
const Users = mongoose.model('Users', UsersSchema);
export const AddNewUser = (req, res) => {
    let NewUser = new Users(req.body);
    NewUser.save((err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}
export const GetUsers = (req, res) => {
    Users.find({}, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}
export const GetUserWithId = (req, res) => {
    Users.findById(req.params.userId, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}
export const UpdateUser = (req, res) => {
    Users.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true, useFindAndModify: false }, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}
export const DeleteUser = (req, res) => {
    Users.deleteOne({ _id: req.params.userId }, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "successfully deleted user" })
    })
}