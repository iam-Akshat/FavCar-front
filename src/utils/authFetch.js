import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  headers: {
    'Content-Type': 'Application/json',
  },
});
authFetch.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
  return config;
});
export default authFetch;
