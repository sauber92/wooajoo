/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
'use strict';

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const session = require('express-session');
const config = require('./config.json');

const GOOGLE_CLIENT_ID = config.google.client_id;
const GOOGLE_CLIENT_SECRET = config.google.client_secret;

// eslint-disable-next-line prefer-arrow-callback
passport.serializeUser(function (user, done) {
  done(null, user);
});

// eslint-disable-next-line prefer-arrow-callback
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback',
},
// eslint-disable-next-line prefer-arrow-callback
  function (accessToken, refreshToken, profile, done) {
// eslint-disable-next-line prefer-arrow-callback
    process.nextTick(function () {
      return done(null, profile);
    });
  },
));

const setup = function (app) {
  app.use(session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/auth/google',
    passport.authenticate('google', { scope: ['openid', 'email'] }));
// eslint-disable-next-line prefer-arrow-callback
//     function (req, res) {
      // The request will be redirected to Google for authentication, so this
      // function will not be called.
    // });

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
// eslint-disable-next-line prefer-arrow-callback
    function (req, res) {
      console.log(req.query);
      res.redirect('/');
    });

// eslint-disable-next-line prefer-arrow-callback
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/login');
  });
};

exports.setup = setup;
