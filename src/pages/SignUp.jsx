import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import bgImg from '../assets/bg.jpg';

const SignUp = () => (
  <div className="container-fluid auth-page d-flex flex-column justify-content-center align-items-center">
    <img src={bgImg} alt="" />
    <h1 className="text-center"> Sign up</h1>
    <SignUpForm />
    <Link to="/signin" href="/signin">Already have an account? Sign in here</Link>
  </div>
);

export default SignUp;
