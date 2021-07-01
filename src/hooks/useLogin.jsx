import { useMutation } from 'react-query';
import signup from '../api/signin';

const useSignIn = () => {
  const {
    mutate, isLoading, isError, error, data,
  } = useMutation('sigin', (data) => signup(data));

  return {
    mutate, isLoading, isError, error, data,
  };
};

export default useSignIn;
