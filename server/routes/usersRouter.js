const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const usersRouter = express.Router();

passport.serializeUser(User);

usersRouter
  .post('/register', (req, res) => {
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
    });
    if (newUser) {
      User.register(newUser, req.body.password, (err, user) => {
        if (err) {
          console.log(err);
          res.status(400).json({
            success: false,
            message: 'Your account could not be saved.',
          });
        } else {
          res.status(200).json({ success: true, user: user });
        }
      });
      return;
    }
  })
  .post('/login', (req, res) => {
    if (!req.body.username) {
      res
        .status(400)
        .json({ sucess: false, message: 'Username was not provided' });
    } else {
      if (!req.body.password) {
        res
          .status(400)
          .json({ success: false, message: 'Password was not provided' });
      } else {
        passport.authenticate('local', (err, user, info) => {
          if (err) {
            res.status(500).json({ success: false, message: err });
          } else {
            if (!user) {
              res.status(400).json({
                success: false,
                message: 'username or password is incorrect',
              });
            } else {
              req.login(user, (err) => {
                if (err) {
                  res.status(500).json({ success: false, message: err });
                } else {
                  const token = jwt.sign(
                    { userId: user._id, username: user.username },
                    'helloworld',
                    { expiresIn: '24h' }
                  );
                  res.status(200).json({
                    success: true,
                    message: 'Authentication successful',
                    token: token,
                  });
                }
              });
            }
          }
        });
      }
    }
  });

module.exports = usersRouter;
