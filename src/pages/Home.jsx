import CarList from '../components/CarList';
import Navbar from '../components/Navbar';

const Home = () => (
  <>
    <Navbar />
    <div className="container">
      <CarList />
    </div>
  </>
);

export default Home;
