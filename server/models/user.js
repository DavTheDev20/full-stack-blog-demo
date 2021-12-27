const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  posts: {
    type: Array,
    default: [],
  },
  likedPosts: {
    type: Array,
    default: [],
  },
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;
