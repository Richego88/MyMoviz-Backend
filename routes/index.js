var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const TMDb_API_KEY = process.env.TMDb_API_KEY;

/* GET movie page. */

router.get("/movies", function (req, res) {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDb_API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      res.json({
        movies: data.results,
      });
    })
    .catch((error) => {
      console.error("Error fetching TMDb API:", error); // Log any error
      res.status(500).json({ error: "Failed to fetch data from TMDb API" });
    });
});

app.get("/", (req, res) => res.send("Backend is working!"));

module.exports = router;
