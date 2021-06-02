import { useMutation } from 'react-query';
import signup from '../api/signup';

const useSignUp = () => {
  const {
    mutate, isLoading, isError, error, data,
  } = useMutation('signup', (data) => signup(data));

  return {
    mutate, isLoading, isError, error, data,
  };
};

export default useSignUp;
