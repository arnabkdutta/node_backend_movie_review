import request from "request";

export const http_request = param_obj => {
  return new Promise((resolve, reject) => {
    request(
      {
        method: param_obj.method,
        uri: param_obj.url,
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
};
