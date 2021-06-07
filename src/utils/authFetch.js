import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://desolate-earth-04875.herokuapp.com/',
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
