import axios from 'axios';

const publicFetch = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  headers: {
    'Content-Type': 'Application/json',
  },
});

export default publicFetch;
