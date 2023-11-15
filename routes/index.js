var express = require("express");
var router = express.Router();

const apiKey = process.env.TMDB_API_KEY;

router.get("/movies", (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      res.json({ movies: data.results });
    });
});

module.exports = router;
console.log("wat");
