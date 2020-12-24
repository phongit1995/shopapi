import { AddNewUser, GetUsers, GetUserWithId, UpdateUser, DeleteUser } from '../controllers/UsersController';

const routes = (app) => {
    app.route('/users')
        .get(GetUsers)
        .post(AddNewUser);
    app.route('/users/:userId')
        .get(GetUserWithId)
        .put(UpdateUser)
        .delete(DeleteUser);
}

export default routes;