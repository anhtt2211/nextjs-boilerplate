import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { development } from "../config";

const httpClient = axios.create({
  baseURL: development.api,
  headers: {
    "Content-type": "application/json",
  },
});

httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = Cookies.get("token");

  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use((response) => {
  return response.data;
});

export default httpClient;
