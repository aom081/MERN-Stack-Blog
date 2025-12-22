import axios from "axios";
import tokenService from "./token.service";
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = tokenService.getToken();
    if (token) {
      // Backend accepts standard Authorization: Bearer <token>
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
