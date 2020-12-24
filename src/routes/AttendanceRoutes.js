import { AddNewAttendance, GetAttendances, GetAttendanceWithId, UpdateAttendance, DeleteAttendance } from '../controllers/AttendancesController';

const routes = (app) => {
    app.route('/attendances')
        .get(GetAttendances)
        .post(AddNewAttendance);
    app.route('/attendances/:attendanceId')
        .get(GetAttendanceWithId)
        .put(UpdateAttendance)
        .delete(DeleteAttendance);
}

export default routes;