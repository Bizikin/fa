import axios from "axios";

const customFetch = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
  withCredentials: true,
});

customFetch.defaults.headers.common["Content-Type"] = "application/json";

customFetch.interceptors.request.use((config) => {
  return config;
});

export default customFetch;
