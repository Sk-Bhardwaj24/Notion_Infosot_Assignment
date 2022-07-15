const express = require("express");
const app = express();
const adminRoute = require("./Routes/admin.route.js");
var cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json([]));
app.use("/admin", adminRoute);
module.exports = app;
