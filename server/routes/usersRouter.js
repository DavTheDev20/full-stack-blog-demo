const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const userRouter = express.Router();

passport.serializeUser(User)

userRouter.post('/register', (req, res) => {
  
});
