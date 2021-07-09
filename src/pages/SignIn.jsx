import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import bgImg from '../assets/bg.jpg';

const SignIn = () => (
  <div className="container-fluid auth-page d-flex flex-column justify-content-center align-items-center">
    <img src={bgImg} alt="" />
    <h1 className="text-center mb-5">Sign In</h1>
    <SignInForm />
    <Link href="/signup" to="/signup" className="d-block mt-3"> Don&apos;t have an account? Create one here </Link>
  </div>
);

export default SignIn;
