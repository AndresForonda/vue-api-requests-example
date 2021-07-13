import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "prod"
    ? process.env.VUE_APP_PROD_API
    : "http://localhost:8080";

const axiosParams = {
  baseURL,
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, body, config) => axios.post(url, body, config),
    patch: (url, body, config) => axios.post(url, body, config),
    delete: (url, config) => axios.post(url, config),
  };
};

export default api(axiosInstance);
