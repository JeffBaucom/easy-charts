import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const UserSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true, index: true},
    username: {type: String, required: true},
    password: {type: String, required: false},
    googleId: {type: String},
}, {collection : 'User'});

let UsersModel = mongoose.model('User', UserSchema);

UsersModel.getUserByUsername = (username, done) => {
    return UsersModel.findOne({username: username}, done);
}

UsersModel.getUserById = (id, done) => {
    return UsersModel.findOne({_id: id}, done);
}

UsersModel.addUser = (userToAdd) => {
    return userToAdd.save();
}

UsersModel.removeUser = (userId) => {
    return UsersModel.remove({_id: userId});
}

/** 
*  login method
*  @param {string} candidatePassword - password to check
*  @param {string} hash - password hash from bcrypt
*  @return {promise<boolean>} result of comparison
*/
UsersModel.comparePassword = (candidatePassword, hash, done ) => {
    return bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) throw err;
        done(null, isMatch);
    });
}

export default UsersModel;