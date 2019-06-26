import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true, index: true},
    username: {type: String, required: true},
    password: {type: String, required: false},
    googleId: {type: String},
}, {collection : 'User'});

let UsersModel = mongoose.model('User', UserSchema);

UsersModel.getAll = () => {
    return UsersModel.find({});
}

UsersModel.addUser = (userToAdd) => {
    return userToAdd.save();
}

UsersModel.removeUser = (userId) => {
    return UsersModel.remove({_id: userId});
}

export default UsersModel;