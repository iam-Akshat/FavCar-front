import axios from 'axios';

const token = window.localStorage.getItem('token');
const authFetch = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  headers: {
    'Content-Type': 'Application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default authFetch;
