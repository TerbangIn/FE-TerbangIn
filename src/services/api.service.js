import axios from "axios";
import { storageService } from ".";

// set baseurl
const main = axios.create({
  // baseURL: 'http://103.179.57.30/api/',
  baseURL: "https://be-tiketku-production.up.railway.app/",
  // baseURL: 'https://api.parkuy.com/api/',
});

main.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const userToken = storageService.getToken() || "";
    config.headers = {
      Authorization: userToken,
      // 'Access-Control-Allow-Credentials' : 'true',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default main;
