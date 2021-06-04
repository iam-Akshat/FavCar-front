import Carousel from 'react-multi-carousel';
import useGetCars from '../hooks/useGetCars';
import CarPreview from './CarPreview';
import 'react-multi-carousel/lib/styles.css';

const CarList = () => {
  const { data, error, isLoading } = useGetCars();

  if (isLoading) return (<h1>Loading...</h1>);
  if (error) return (<h1>{error}</h1>);
  const cars = data.data;
  const carsPreviews = cars.map((car) => (
    <div key={car.id}>
      <CarPreview
        name={car.name}
        imageUrl={car.image_url}
        id={car.id}
      />
    </div>

  ));
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 800,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 800,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {carsPreviews}
    </Carousel>
  );
};

export default CarList;
