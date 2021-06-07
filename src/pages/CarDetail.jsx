import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCarDetails } from '../state/slices/car';
import useGetCarById from '../hooks/useGetCarById';
import CarPageNavbar from '../components/CarPageNavbar';
import CarFavUnfavBtn from '../components/CarFavUnfavBtn';

const CarDetail = () => {
  const { id: carId } = useParams();
  const [car, setCar] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const [delay, setDelay] = useState(true);
  const { error, data, isLoading } = useGetCarById(carId);

  useEffect(() => {
    if (data) {
      const { data: serverCar } = data;
      setCar(serverCar.car);
      setIsLiked(serverCar.user_liked);
      dispatch(addCarDetails({ id: serverCar.car.id, data: serverCar }));
      setDelay(false);
    }
  }, [data, dispatch]);
  if (isLoading || delay) return (<h1>Loading...</h1>);
  if (error) {
    return (
      <h1 className="text-danger">
        {error}
      </h1>
    );
  }
  return (
    <>
      <CarPageNavbar name={(car.name) || ''} />
      <div className="w-100">
        <img src={car.image_url} alt={car.name} className="img w-100 h-50" style={{ maxWidth: '500px' }} />
        <p className="text-center mt-1">{car.description}</p>
        <p className="text-center mt-1">{`$ ${car.price}`}</p>
      </div>
      <CarFavUnfavBtn id={car.id} liked={isLiked === true} />
    </>

  );
};

export default CarDetail;
