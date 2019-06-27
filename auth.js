import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { Strategy as LocalStrategy} from 'passport-local';
import config from './core/config/config.dev'
import UsersModel from './models/users.model';

export function auth(passport) {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new GoogleStrategy({
    clientID: config.googleID,
    clientSecret: config.googleSecret,
    callbackURL: 'http://localhost:8080/auth/google/callback',
  },
  (token, refreshToken, profile, done) => {
    UsersModel.findOne({googleId: profile.id}, (err, user) => {

      if (!user) {
        UsersModel.create({
          accessToken,
          googleId: profile.id,
          username: profile.displayName
        }, (err, user) => {
          return done(err, user);
        });
      }
      return done(null, {
        profile: profile,
        token: token
      });
    });
  }));
  passport.use(new LocalStrategy(
    function(username, password, done) {
      UsersModel.getUserByUsername(username, function(err, user) {
        if (err) throw err 
        if (!user) {
          return done(null, false, {message: 'Invalid Login'})
        }
       UsersModel.comparePassword(password, user.password, (comparisonErr, match) => {
            if (comparisonErr) throw comparisonErr;
            if (match) {
              return done(null, user);
            } else {
              return done(null, false, {message: 'Invalid Login'})
            }
          });
      })
    }
  ))
}