import { AddNewAttendance, GetAttendances, GetAttendanceWithId, UpdateAttendance, DeleteAttendance ,CheckOut,GetAttendancesSalary} from '../controllers/AttendancesController';

const routes = (app) => {
    app.route('/attendances')
        .get(GetAttendances)
        .post(AddNewAttendance);
    app.route('/attendances/:attendanceId')
        .get(GetAttendanceWithId)
        .put(UpdateAttendance)
        .delete(DeleteAttendance);
    app.route("/salary").get(GetAttendancesSalary);
    app.route('/attendances/checkOut/:id').post(CheckOut);


    
}

export default routes;