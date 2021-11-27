import express from "express";
import cors from "cors";
// import { GraphQLServer } from "graphql-yoga";
import api from "./src/route/api.js";
import { movieDb } from "./lib/movie_db/class.js";
require("dotenv").config();

const movie_db = new movieDb(process.env.API_KEY);

const app = express();
app.use(cors());
const route = () => api({ movie_db}, app);
route();
app.listen(3000, () => console.log("app running on 3000"));
