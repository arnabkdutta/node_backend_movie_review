import { config } from "./config";
import request from "request";
// import { resolve } from "dns";
import _ from "lodash"

export class movieDb {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  movieDetailsByName(movieName, year = null , page = null) {
    const url = `${config.baseUrl}/${config.apiList.searchMovie}?api_key=${this.apiKey}&query=${movieName}&year=${year}&page=${page}`;
    return new Promise((resolve, reject) => {
      if (!movieName) {
        return reject("Movie Name is mandetory");
      }
      request(
        {
          method: "GET",
          uri: url,
          gzip: true
        },
        function(error, response, body) {
          if (error) {
            return reject(error);
          }
          resolve(JSON.parse(body));
        }
      );
    });
  }
  getMovieId(movieName , year = null , page = null){
    return new Promise(async (resolve , reject) => {
      try {
        const allResult = await this.movieDetailsByName(movieName , year, page);
        let movieArr = [];
        if(allResult.results.length == 0)
        {
          return resolve(null);
        }
        for(let index in allResult.results)
        {         
          movieArr.push(allResult.results[index].id);
        }
        resolve(movieArr); // return all movie id array
      } catch (error) {
        reject(error);
      }
    })
  }
}
