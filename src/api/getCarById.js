import authFetch from '../utils/authFetch';

const getCarById = async ({ id }) => {
  const result = await authFetch.get(`/cars/${id}`);
  return result;
};

export default getCarById;
