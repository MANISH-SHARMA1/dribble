const mongoose = require("mongoose");

const signup = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  termsAccepted: {
    type: Boolean,
    required: true,
  },
  avatar: {
    publicId: String,
    url: String,
  },
  location: {
    type: String,
  },
  selectedOption: {
    type: String,
  },
});

module.exports = mongoose.model("signup", signup);
