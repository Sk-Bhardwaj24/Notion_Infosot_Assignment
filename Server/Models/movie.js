const mongoose = require("mongoose");

const movie = new mongoose.Schema({
  movie_Name: { type: String, required: true },
  movie_Title: { type: String, required: true },
  movie_Rating: { type: String, required: true },
  movie_Category: { type: String, required: true },
});

module.exports = mongoose.model("movie", movie);
