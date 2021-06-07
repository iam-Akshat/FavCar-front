import axios from 'axios';

const publicFetch = axios.create({
  baseURL: 'https://desolate-earth-04875.herokuapp.com/',
  headers: {
    'Content-Type': 'Application/json',
  },
});

export default publicFetch;
