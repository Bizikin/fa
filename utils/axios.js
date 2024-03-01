import axios from "axios";

const customFetch = axios.create({
  // baseURL: "http://localhost:1000/api/",
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
});

customFetch.interceptors.request.use((config) => {
  return config;
});

export default customFetch;
