import createStore from 'redux-mock-store';
import event from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import SignUpFrom from '../components/SignUpForm';

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
      appRenderer(<SignUpFrom />, store);
    });
    it('shows errors when empty fields', () => {
      const submitButton = screen.getByText('Sign Up');
      event.click(submitButton);

      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('A valid email is required')).toBeInTheDocument();
      expect(screen.getByText('A valid password needs to be atleast 6 characters')).toBeInTheDocument();
    });
    it('shows password does not match error when passwords dont match', () => {
      const submitButton = screen.getByText('Sign Up');
      const nameField = screen.getByLabelText('Your name');
      const emailField = screen.getByLabelText('Your email');
      const pwField = screen.getByLabelText('A strong password');
      const pwwField = screen.getByLabelText('Password confirmation');

      event.type(nameField, 'testtter');
      event.type(emailField, 'adsf@fads.com');
      event.type(pwField, '123456');
      event.type(pwwField, '12345677');

      event.click(submitButton);

      expect(screen.getByText('Passwords dont match')).toBeInTheDocument();
    });
  });
});
