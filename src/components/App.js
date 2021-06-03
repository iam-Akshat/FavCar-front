import { QueryClient, QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from '../Routes';
import store from '../state/store';
import { AuthProvider } from '../context/authContext';

const qc = new QueryClient();
function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <QueryClientProvider client={qc}>
            <AppRoutes />
          </QueryClientProvider>
        </Router>
      </AuthProvider>
    </Provider>

  );
}

export default App;
