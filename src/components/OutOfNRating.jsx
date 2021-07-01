import PropTypes from 'prop-types';
import Star from './Star';

const OutOfNRating = ({ rating, maxRating }) => {
  const stars = [];
  let t = 0;
  while (t < rating) {
    t += 1;
    stars.push(<Star key={t} active />);
  }

  while (t < maxRating) {
    t += 1;
    stars.push(<Star key={t} active={false} />);
  }

  return (
    <div className="rating" data-testid="rating">{stars}</div>
  );
};

OutOfNRating.defaultProps = {
  maxRating: 5,
};

OutOfNRating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
};

export default OutOfNRating;
