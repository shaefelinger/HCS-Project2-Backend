const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: String,
});

module.exports = mongoose.model('User', userSchema);
