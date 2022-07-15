const express = require("express");
const app = express();
const movieController = require("../Controllers/movie");
app.post("/create", movieController.addMovie);
app.get("/", movieController.getMovie);
app.delete("/deletemovie/:_id", movieController.deleteMovie);
app.put("/updatemovie/:_id", movieController.updateMovie);
module.exports = app;
