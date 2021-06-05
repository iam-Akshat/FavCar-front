/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ErrorText from './ErrorText';
import validateEmail from '../utils/validation';
import useSignIn from '../hooks/useLogin';
import { AuthContext } from '../context/authContext';

const SignInForm = () => {
  const [red, setRed] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState('');
  const [signInError, setSignInError] = useState('');
  const {
    mutate, isError, error, data,
  } = useSignIn();
  const auth = useContext(AuthContext);
  const validateFields = () => {
    setEmailError('');
    setPwError('');
    let hasErrors = false;
    if (pw.trim().length < 6) {
      setPwError('Password can\'t be empty');
      hasErrors = true;
    } else {
      setPwError('');
    }
    if (!(email && validateEmail(email.trim()))) {
      setEmailError('A valid email is required');
      hasErrors = true;
    } else {
      setEmailError('');
    }
    return hasErrors;
  };
  useEffect(() => {
    if (isError) {
      const errorReg = /Invalid credentials/;
      if (errorReg.test(error.response.data.message)) {
        setSignInError('Invalid email or password');
        setPw('');
      }
    }
  }, [isError]);
  useEffect(() => {
    if (data) {
      const { auth_token: authToken, user_info: userInfo } = data.data;
      auth.loginHelper(authToken, userInfo || {});
      setSuccess(true);
      setTimeout(() => { setRed(true); }, 1000);
    }
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) {
      mutate({ email, pw });
    }
  };
  if (auth.isAuthenticated() || (data && data.data.auth_token)) {
    if (red) {
      return (<Redirect to="/" />);
    }
  }
  return (
    <form className="container" onSubmit={handleSubmit}>
      {success ? (<div className="text-success">Redirecting...</div>) : null}
      <ErrorText error={signInError} />
      <div className="form-floating mb-3">
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
        <label htmlFor="email">Your email</label>
        <ErrorText error={emailError} />
      </div>
      <div className="form-floating mb-3">
        <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={pw}
          onChange={(e) => { setPw(e.target.value); }}
        />
        <label htmlFor="password">A strong password</label>
        <ErrorText error={pwError} />
      </div>
      <button className="btn btn-primary" type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
