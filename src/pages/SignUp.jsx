import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => (
  <div className="container">
    <h1 className="text-center"> Sign up</h1>
    <SignUpForm />
    <Link to="/signin" href="/signin">Already have an account? Sign in here</Link>
  </div>
);

export default SignUp;
