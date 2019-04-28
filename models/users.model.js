import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true}
}, {collection : 'User'});

let UsersModel = mongoose.model('User', UserSchema);

UsersModel.getAll = () => {
    return UsersModel.find({});
}

UsersModel.addUser = (userToAdd) => {
    return userToAdd.save();
}

UsersModel.removeUser = (userName) => {
    return UsersModel.remove({userName: userName});
}

export default UsersModel;