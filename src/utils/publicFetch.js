import axios from 'axios';

const publicFetch = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.01:3000' : 'https://desolate-earth-04875.herokuapp.com/',
  headers: {
    'Content-Type': 'Application/json',
  },
});

export default publicFetch;
