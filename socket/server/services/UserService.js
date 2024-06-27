const { logout } = require('../controllers/UserController');
const UserModel = require('../model/UserModel');

const UserService = {
    addUser: (username, password, age) => {
        return UserModel.create({
            username, password, age
        })
    },
    updateUser: (_id, username, password, age) => {
        return UserModel.updateOne({ _id }, {
            username, password, age
        })
    },
    deleteUser: (_id) => {
        return UserModel.deleteOne({ _id })
    },
    getUser: (page, limit) => {
        return UserModel.find({}, ['username', 'age'])
            .sort()
            .skip((page - 1) * limit)
            .limit(limit)
    },
    login: (username, password) => {
        return UserModel.find({ username, password })
    }

}
module.exports = UserService