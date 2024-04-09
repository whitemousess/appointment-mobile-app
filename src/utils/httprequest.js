import axios from "axios";
console.log(process.env.REACT_APP_BASE_URL);
export const httpRequest = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: "http://192.168.1.6:1407/api/",
});
