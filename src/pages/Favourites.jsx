import Carousel from 'react-multi-carousel';
import useGetCars from '../hooks/useGetCars';
import CarPreview from '../components/CarPreview';
import 'react-multi-carousel/lib/styles.css';
import Navbar from '../components/Navbar';

const Favourites = () => {
  const { data, error, isLoading } = useGetCars('/favourites');

  if (isLoading) return (<h1>Loading...</h1>);
  if (error) return (<h1>{error.response.body.message}</h1>);
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
    <>
      <Navbar />
      <div className="container d-flex flex-column justify-content-center" style={{ height: '80vh' }}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="my-auto"
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
      </div>
    </>
  );
};

export default Favourites;
