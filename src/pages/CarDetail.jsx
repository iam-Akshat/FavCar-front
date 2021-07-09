import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCarDetails } from '../state/slices/car';
import useGetCarById from '../hooks/useGetCarById';
import CarPageNavbar from '../components/CarPageNavbar';
import CarFavUnfavBtn from '../components/CarFavUnfavBtn';
import OutOfNRating from '../components/OutOfNRating';

const CarDetail = () => {
  const { id: carId } = useParams();
  const [car, setCar] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const [delay, setDelay] = useState(true);
  const { error, data, isLoading } = useGetCarById(carId);
  const [showFull, setShowFull] = useState(undefined);

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
      <div className="w-100 car-detail-holder mx-auto">
        <div className="img_holder position-relative">
          <img src={car.image_url} alt={car.name} className="img w-100" />
          <div className="img_details position-absolute w-100 d-flex justify-content-between align-items-center px-2" style={{ bottom: '5px', color: 'white' }}>
            <div className="left">
              <p className="card-text mb-none">{car.manufacturer}</p>
              <OutOfNRating rating={4} />
            </div>
            <div className="right">
              <p className="card-text mb-none">{`$ ${car.price}`}</p>
              <p className="d-block mb-none text-sm">total price</p>
            </div>
          </div>
        </div>
        <div className="container px-4 py-3 ">
          <p className="mt-3 text-bold"> About this car</p>
          <p className="mt-1 text-m text-secondary">{car.description.substr(0, showFull ? undefined : 250)}</p>
          <p className="text-center mb-5" style={{ transform: showFull ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <svg onClick={() => setShowFull(!showFull)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-center mx-auto" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </p>

        </div>
      </div>
      <CarFavUnfavBtn id={car.id} liked={isLiked === true} />
    </>

  );
};

export default CarDetail;
