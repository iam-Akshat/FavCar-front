import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CarFavUnfavBtn = ({ id }) => {
  const likedArray = useSelector((state) => state.auth.userInfo.liked);
  const isFav = likedArray.indexOf(id) !== -1;

  return (
    <button type="button" className="btn btn-primary">{isFav ? 'remove from favs' : 'add to favs'}</button>
  );
};

CarFavUnfavBtn.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CarFavUnfavBtn;
