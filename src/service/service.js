import request from "request";
import { http_request } from "../../util/util";

export const getLatestMovie = () => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.API_BASE_URL}/movie/latest?api_key=${process.env.API_KEY}&language=en-US`;
      const httpParam = { method: "GET", url: url };
        http_request(httpParam)
        .then(res => {
            resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
};

export const getTopRatedtMovie = () => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.API_BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`;
      const httpParam = { method: "GET", url: url };
        http_request(httpParam)
        .then(res => {
            resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
};

export const getmoviNameById = (movieId) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.API_BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`;
      const httpParam = { method: "GET", url: url };
        http_request(httpParam)
        .then(res => {
            resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
};
