import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarPreview = ({ id, name, imageUrl }) => (
  <Link href={`/cars/${id}`} to={`/cars/${id}`}>
    <div className="card" style={{ width: '80vw', maxWidth: '600px' }}>
      <img className="card-img-top" src={imageUrl} alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
    </div>
  </Link>

);

CarPreview.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CarPreview;
