import authFetch from '../utils/authFetch';

const unfavourite = async ({ id }) => {
  const result = await authFetch.delete(`/cars/${id}/unfavourite`);
  return result;
};

export default unfavourite;
