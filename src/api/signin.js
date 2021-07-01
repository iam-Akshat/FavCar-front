import publicFetch from '../utils/publicFetch';

const signin = async ({ email, pw }) => {
  const result = await publicFetch.post('/auth/login',
    JSON.stringify({
      email, password: pw,
    }));
  return result;
};

export default signin;
