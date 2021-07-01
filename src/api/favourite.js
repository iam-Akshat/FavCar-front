import authFetch from '../utils/authFetch';

const favourite = async ({ id }) => {
  const result = await authFetch.post(`/cars/${id}/favourite`);
  return result;
};

export default favourite;
