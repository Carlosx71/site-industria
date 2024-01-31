import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_END_POINT,
  timeout: 20000,
});

export default api;
