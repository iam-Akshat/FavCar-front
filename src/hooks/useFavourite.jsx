import { useMutation } from 'react-query';
import favourite from '../api/favourite';

const useFavourite = () => {
  const result = useMutation(['favourite'], (data) => favourite({ id: data.id }));

  return { ...result };
};

export default useFavourite;
