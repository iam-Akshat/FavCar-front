import { useMutation } from 'react-query';
import unfavourite from '../api/unfavourite';

const useUnfavourite = () => {
  const result = useMutation(['favourite'], (data) => unfavourite({ id: data.id }));

  return { ...result };
};

export default useUnfavourite;
