import publicFetch from '../utils/publicFetch';

const signup = async ({
  name, email, pw, pww,
}) => {
  const result = await publicFetch.post('/signup',
    JSON.stringify({
      name, email, password: pw, password_confirmation: pww,
    }));
  return result;
};

export default signup;
