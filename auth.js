import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

export function auth(passport) {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(new GoogleStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: '',
  },
  (token, refreshToken, profile, done) => {
    return done(null, {
      profile: profile,
      token: token
    });
  }));
}