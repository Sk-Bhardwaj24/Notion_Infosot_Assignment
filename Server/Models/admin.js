const mongoose = require("mongoose");

const admin = new mongoose.Schema({
  a_firstName: { type: String, required: true },
  a_lastName: { type: String },
  a_email: { type: String, required: true },
  a_password: { type: String, required: true },
});

module.exports = mongoose.model("admin", admin);
