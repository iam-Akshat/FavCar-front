import { useQuery } from 'react-query';
import getCars from '../api/getCars';

const useGetCars = (url) => {
  if (url) {
    const res = useQuery('favouriteCars', () => getCars(url));
    return { ...res };
  }
  const res = useQuery('cars', getCars);

  return { ...res };
};

export default useGetCars;
