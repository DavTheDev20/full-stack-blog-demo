require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const postsRouter = require('./routes/postsRouter');
const usersRouter = require('./routes/usersRouter');
const passport = require('passport');
const User = require('./models/user');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(
  session({
    secret: 'helloworld',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

mongoose.connect('mongodb://localhost:27017/full-stack-blog-demo', (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('Connected to local database.');
  }
});

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Server running on port: ${port}`));
