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
};
