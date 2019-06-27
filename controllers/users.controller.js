import User from '../models/users.model';
import logger from '../core/logger/app-logger';
import passport from 'passport';
import * as bcrypt from 'bcrypt';

function userValidator(body) {
  return emailIsValid(body.email) && passwordIsValid(body.password);
}

function passwordIsValid(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password);
}

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

let controller = {
  register: async (req, res) => {
    // TODO: add conditions for different strategies
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;

    if (password === passwordConfirm && userValidator(req.body)) {
      // DO stuff
      let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          newUser.password = hash;
          User.addUser(newUser).then((user) => {
            delete user.password;
            res.send({
              id: user._id,
              email: user.email,
              username: user.username
            });
          }, (err) => {
            res.status(400).send(err);
          });
        });
      });

    } else {
      res.status(400).send('Error: Invalid user data');
    }
  }
}
export default controller 