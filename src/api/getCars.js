import authFetch from '../utils/authFetch';

const getCars = async (url = '/cars') => {
  const result = await authFetch.get(url);
  return result;
};

export default getCars;
