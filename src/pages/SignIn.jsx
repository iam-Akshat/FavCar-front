import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm';

const SignIn = () => (
  <div className="container">
    <h1 className="text-center">Sign In</h1>
    <SignInForm />
    <Link href="/signup" to="/signup" className="d-block mt-3"> Don&apos;t have an account? Create one here </Link>
  </div>
);

export default SignIn;
