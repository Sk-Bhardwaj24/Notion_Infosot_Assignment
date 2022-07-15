const movie = require("../Models/movie");
const movieModel = require("../Models/movie");
async function addMovie(req, res) {
  try {
    let movieDetails = req.body;
    let response = await movieModel.insertMany([movieDetails]);
    res.status(201).json({
      status: true,
      movie: response,
    });
  } catch (error) {
    res.status(401).json({
      status: false,
      movie: error,
    });
  }
}
async function getMovie(req, res) {
  try {
    let response = await movieModel.find({});
    res.status(200).json({
      status: true,
      movie: response,
    });
  } catch (error) {
    res.status(401).json({
      status: false,
      movie: error,
    });
  }
}
async function deleteMovie(req, res) {
  try {
    let movieId = req.params;

    let response = await movieModel.deleteOne({ _id: movieId });
    res.status(200).json({
      status: true,
      movie: response,
    });
    res.send(true);
  } catch (error) {
    res.status(401).json({
      status: false,
      movie: error,
    });
  }
}
async function updateMovie(req, res) {
  try {
    let movieId = req.params._id;
    let body = req.body;
    let response = await movieModel.updateOne({ _id: movieId }, { $set: body });
    res.status(200).json({
      status: true,
      movie: response,
    });
  } catch (error) {
    res.status(401).json({
      status: false,
      movie: error,
    });
  }
}

module.exports = {
  addMovie,
  getMovie,
  deleteMovie,
  updateMovie,
};
