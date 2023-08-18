import axios, { AxiosRequestConfig } from 'axios';

const API_Key = '3cc7f07f8bf10cf417cbbb7574e4c969';

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_Key}`;

const instance = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  async function cf(config) {
    return {
      ...config,
      headers: {
        accept: 'application/json',
      },
    };
  },
  function err(error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function res(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function err(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export const fetcher = async (url, config) => {
  const res = await instance.get(url, config);
  return res.data;
};

export default instance;
