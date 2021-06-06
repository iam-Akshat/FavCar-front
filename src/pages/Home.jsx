import CarList from '../components/CarList';
import Navbar from '../components/Navbar';

const Home = () => (
  <>
    <Navbar />
    <div className="container d-flex flex-column justify-content-center" style={{ height: '80vh' }}>
      <CarList />
    </div>
  </>
);

export default Home;
