import { getLatestMovie, getTopRatedtMovie } from "../service/service";

export default ({ movie_db }, app) => {
  app.get("/getMovieName/movieName/:movieName", (req, res) => {
    movie_db
      .movieDetailsByName(req.params.movieName, req.query.year, req.query.page)
      .then(reponse => {
        res.send(reponse);
      })
      .catch(error => {
        res.send({ error });
      });
  });
  app.get("/getMoviesIds/movieName/:movieName", (req, res) => {
    movie_db
      .getMovieId(req.params.movieName, req.query.year, req.query.page)
      .then(moviesId => {
        res.send({ moviesId });
      })
      .catch(error => {
        res.send({ error: error.stack });
      });
  });

  app.get("/getLatestMovie", (req, res) => {
    getLatestMovie()
      .then(response => {
        res.send(response);
      })
      .catch(error => {
        res.send({ error: error.stack });
      });
  });

  app.get("/getTopRated", (req, res) => {
    getTopRatedtMovie()
      .then(response => {
        res.send(response);
      })
      .catch(error => {
        res.send({ error: error.stack });
      });
  });
};
