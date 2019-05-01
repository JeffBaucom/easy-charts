import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import config from './core/config/config.dev'

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
    return done(null, {
      profile: profile,
      token: token
    });
  }));
}