import axios from 'axios';
import { getCookie } from 'cookies-next';


const axiosApi = axios.create({
  baseURL: 'http://localhost:4000/',
});

axiosApi.interceptors.request.use((config) => {
  const currentToken = getCookie('accessToken');

  if (currentToken) {
    config.headers.Authorization = `Bearer ${currentToken}`;
  }
  return config;
});

export default axiosApi;