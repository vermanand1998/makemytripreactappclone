import axios from "axios";

const api = axios.create({
  baseURL: "https://academics.newtonschool.co/api/v1",
  headers: {
    projectId: "x083cyz5zud7",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("prime_token");
  // console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
