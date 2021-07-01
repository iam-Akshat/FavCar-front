import { useQuery } from 'react-query';
import getCarById from '../api/getCarById';

const useGetCarById = (id = null) => {
  const result = useQuery(['car', id], () => getCarById({ id }), {
    enabled: !!id,
  });
  return { ...result };
};

export default useGetCarById;
