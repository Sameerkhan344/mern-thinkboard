// import axios from "axios";
// // In production,there's no localhost so we have to make  this dynamic
// const BASE_URL = import.meta.env.MODE === "development" ?  "http://localhost:5001/api" : "/api"; 
// const api = axios.create({
//     baseURL : BASE_URL,
// })
// export default api;

import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;