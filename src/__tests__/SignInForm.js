import createStore from 'redux-mock-store';
import event from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import SignInForm from '../components/SignInForm';

const initialState = {
  cars: {},
  auth: {},
};

describe('SignUpForm', () => {
  const mockStore = createStore([]);
  describe('form validations', () => {
    beforeEach(() => {
      const store = mockStore(initialState);
      // eslint-disable-next-line no-undef
      appRenderer(<SignInForm />, store);
    });
    it('shows errors when empty fields', () => {
      const submitButton = screen.getByText('Sign Up');
      event.click(submitButton);

      expect(screen.getByText('A valid email is required')).toBeInTheDocument();
      expect(screen.getByText('Password can\'t be empty')).toBeInTheDocument();
    });
  });
});
