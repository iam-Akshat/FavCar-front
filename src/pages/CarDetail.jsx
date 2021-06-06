import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCarDetails } from '../state/slices/car';
import useGetCarById from '../hooks/useGetCarById';
import CarPageNavbar from '../components/CarPageNavbar';
import CarFavUnfavBtn from '../components/CarFavUnfavBtn';

const CarDetail = () => {
  const { id: carId } = useParams();
  const [car, setCar] = useState(useSelector((state) => state.car.carDetails.id));
  const dispatch = useDispatch();
  const [delay, setDelay] = useState(true);
  const { error, data, isLoading } = useGetCarById(car ? null : carId);

  useEffect(() => {
    if (data) {
      const { data: serverCar } = data;
      setCar(serverCar);
      dispatch(addCarDetails({ id: serverCar.id, data: serverCar }));
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
      </div>
      <CarFavUnfavBtn id={car.id} />
    </>

  );
};

export default CarDetail;
