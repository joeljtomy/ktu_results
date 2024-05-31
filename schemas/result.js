const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  id: String,
  fullName: String,
  grades: [{
    courseName: String,
    credits: Number,
    grade: String,
    description: String
  }]
});

module.exports = mongoose.model("Result", resultSchema);
