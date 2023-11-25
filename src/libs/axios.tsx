import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosAuth.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(sessionStorage.getItem("token")!);
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
