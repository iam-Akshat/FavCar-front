/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import useSignUp from '../hooks/useSignUp';
import validateEmail from '../utils/validation';
import ErrorText from './ErrorText';
import { AuthContext } from '../context/authContext';

const SignUpForm = () => {
  const auth = useContext(AuthContext);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState(null);
  const [pww, setPww] = useState('');
  const [pwwError, setPwwError] = useState(null);
  const {
    mutate, isError, error, data,
  } = useSignUp();

  useEffect(() => {
    if (isError) {
      const errorReg = /Email has already been taken/;
      if (errorReg.test(error.response.data.message)) {
        setEmailError('Email has already been taken');
      }
    }
    if (data) {
      const { auth_token: authToken, user_info: userInfo } = data.data;
      auth.loginHelper(authToken, userInfo || {});
    }
  }, [isError, data]);

  const validateFields = () => {
    setNameError('');
    setEmailError('');
    setPwError('');
    setPwwError('');
    let hasErrors = false;
    if (name.trim().length < 1) {
      setNameError('Name is required');
      hasErrors = true;
    } else {
      setNameError(null);
    }
    if (pw.trim().length < 6) {
      setPwError('A valid password needs to be atleast 6 characters');
      hasErrors = true;
    } else {
      setPwError(null);
    }
    if (pw !== pww) {
      setPwwError('Passwords dont match');
      hasErrors = true;
    } else {
      setPwwError(null);
    }

    if (!(email && validateEmail(email.trim()))) {
      setEmailError('A valid email is required');
      hasErrors = true;
    } else {
      setEmailError(null);
    }
    return hasErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = validateFields();
    if (hasErrors) return;
    mutate({
      name, email, pw, pww,
    });
  };
  if (data) {
    return <Redirect to="/" />;
  }
  return (
    <form className="container  d-flex flex-column align-items-center justify-items-center" onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          name="name"
          type="text"
          className="form-control shadow-none px-5"
          id="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
        <label htmlFor="name">Your name</label>
        <ErrorText error={nameError} />
      </div>
      <div className="form-floating mb-3">
        <input
          name="email"
          type="email"
          className="form-control shadow-none px-5"
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
          className="form-control shadow-none px-5"
          id="password"
          placeholder="Password"
          value={pw}
          onChange={(e) => { setPw(e.target.value); }}
        />
        <label htmlFor="password">A strong password</label>
        <ErrorText error={pwError} />
      </div>
      <div className="form-floating mb-3">
        <input
          name="password_confirmation"
          type="password"
          className="form-control shadow-none px-5"
          id="password_confirmation"
          placeholder="Password"
          value={pww}
          onChange={(e) => { setPww(e.target.value); }}
        />
        <label htmlFor="password_confirmation">Password confirmation</label>
        <ErrorText error={pwwError} />
      </div>
      <button className="btn btn-primary" type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
