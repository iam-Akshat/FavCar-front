import { Switch, Route, Redirect } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './context/authContext';
import SignUp from './pages/SignUp';
import AppShell from './AppShell';
import SignIn from './pages/SignIn';

const UnauthenticatedRoutes = () => (
  <>
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
    </Switch>
  </>
);

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={() => (auth.isAuthenticated() ? (
        <AppShell>{children}</AppShell>
      ) : (
        <Redirect to="/" />
      ))}
    />
  );
};
AuthenticatedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
const LoadingFallback = () => (
  <AppShell>
    <div className="p-4">Loading...</div>
  </AppShell>
);

const AppRoutes = () => (
  <>
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <AuthenticatedRoute path="/auth">
          <h1>You in </h1>
        </AuthenticatedRoute>
        <UnauthenticatedRoutes />
      </Switch>
    </Suspense>
  </>
);

export default AppRoutes;
