import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import config from './core/config/config.dev'
import UsersModel from './models/users.model';

export function auth(passport) {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
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
}