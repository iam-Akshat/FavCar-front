import authFetch from '../utils/authFetch';

const getCars = async () => {
  const result = await authFetch.get('/cars');
  return result;
};

export default getCars;
