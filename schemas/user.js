const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: String,
  dob: String,
});

module.exports = mongoose.model("User", userSchema);
