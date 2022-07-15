const express = require("express");
const app = express();
const adminController = require("../Controllers/admin");
app.post("/create", adminController.createAdmin);
app.post("/login", adminController.loginAdmin);
module.exports = app;
