const mongoose = require("mongoose");

const resultNotificationSchema = new mongoose.Schema({
  examDefId: Number,
  id: Number,
  publishDate: Date,
  resultName: String,
  schemeId: Number,
});

module.exports = mongoose.model("ResultNotification", resultNotificationSchema);
