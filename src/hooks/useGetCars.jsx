import { useQuery } from 'react-query';
import getCars from '../api/getCars';

const useGetCars = () => {
  const res = useQuery('cars', getCars);

  return { ...res };
};

export default useGetCars;
