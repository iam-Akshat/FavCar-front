import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OutOfFiveRating from './OutOfNRating';

const CarPreview = ({
  id, name, imageUrl, price,
}) => (
  <Link href={`/cars/${id}`} to={`/cars/${id}`} className="text-decoration-none">
    <div className="card shadow-lg" style={{ width: '80vw', maxWidth: '600px' }}>
      <img className="card-img-top" src={imageUrl} alt={name} />
      <div className="card-body d-flex justify-content-between">
        <div className="left">
          <p className="card-text text-dark mb-none">{name}</p>
          <OutOfFiveRating rating={4} />
        </div>
        <div className="right">
          <p className="card-text text-dark mb-none">{`$ ${price}`}</p>
          <p className="d-block text-muted mb-none text-sm">total price</p>
        </div>
      </div>
    </div>
  </Link>

);

CarPreview.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default CarPreview;
