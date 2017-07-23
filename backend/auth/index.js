/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
'use strict';

// eslint-disable-next-line consistent-return
const ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
};

exports.ensureAuthenticated = ensureAuthenticated;