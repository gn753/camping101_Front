import axios from "axios";
export const axiosSetting = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

axiosSetting.defaults.withCredentials = true;

// axiosSetting.interceptors.request.use(function (config): any {
//   config.headers[
//     "access_token"
//   ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzaWduVXBUeXBlIjoiRU1BSUwiLCJtZW1iZXJUeXBlIjoiQ1VTVE9NRVIiLCJleHAiOjE2ODkzMjk3NTUsImVtYWlsIjoidGVzdDFAbmF2ZXIuY29tIiwibWVtYmVySWQiOjl9.i_NJQTUCespLGbhPXFFR04G1QEF9NGo19RVrhpb0Pw0`;
//   config.headers[
//     "refresh_token"
//   ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzaWduVXBUeXBlIjoiRU1BSUwiLCJtZW1iZXJUeXBlIjoiQ1VTVE9NRVIiLCJleHAiOjE2ODkzMjk3NTUsImVtYWlsIjoidGVzdDFAbmF2ZXIuY29tIiwibWVtYmVySWQiOjl9.i_NJQTUCespLGbhPXFFR04G1QEF9NGo19RVrhpb0Pw0`;
//   config.headers["Content-Type"] = `application/json`;

//   return config;
// });
