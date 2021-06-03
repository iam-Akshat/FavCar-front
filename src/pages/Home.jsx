import { useSelector } from 'react-redux';

const Home = () => {
  const name = useSelector((state) => state.auth.userInfo.name);
  return (
    <div className="container">
      {name}
    </div>
  );
};

export default Home;
