import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isExpired } from 'react-jwt';
import { login, logout } from '../state/slices/authSlice';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(useSelector((state) => state.auth.token));
  const dispatch = useDispatch();

  const loginHelper = (token, userInfo) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    dispatch(login({ token, userInfo }));
  };

  const isAuthenticated = () => {
    const actualToken = window.localStorage.getItem('token') || token;
    if (!actualToken) return false;
    if (isExpired(actualToken)) return false;
    return true;
  };

  const logoutHelper = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
  };

  return (
    <Provider
      value={{
        loginHelper,
        logoutHelper,
        isAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AuthProvider, AuthContext };
