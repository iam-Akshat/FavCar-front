// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/authContext';

global.appRenderer = (renderComponent, store, route) => {
  const history = createMemoryHistory();
  const qc = new QueryClient();
  if (route) {
    history.push(route);
  }

  return {
    ...render(
      <Provider store={store}>
        <AuthProvider>
          <Router history={history}>
            <QueryClientProvider client={qc}>
              {renderComponent}
            </QueryClientProvider>
          </Router>
        </AuthProvider>

      </Provider>,
    ),
    history,
  };
};
