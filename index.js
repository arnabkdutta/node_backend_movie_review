// const mdb = require('moviedb')('a9d0c86f5b26f5948534ba1f7be597a2');
// mdb.searchMovie({ query: 'Alien' }, (err, res) => {
//     console.log(res);
//   });

//   console.log('hi');

import express from "express";
import api from "./src/route/api";
import { movieDb } from "./lib/movie_db/class";
const movie_db = new movieDb("a9d0c86f5b26f5948534ba1f7be597a2");
const app = express();
const route = () => api({ movie_db }, app);
route();
app.listen(2000, () => console.log("app running on 2000"));
