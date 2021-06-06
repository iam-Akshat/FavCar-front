import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { addFav, removeFav } from '../state/slices/car';
import useUnfavourite from '../hooks/useUnfavourite';
import useFavourite from '../hooks/useFavourite';

const CarFavUnfavBtn = ({ id, liked }) => {
  const qc = useQueryClient();
  const [error, setError] = useState(null);
  const [isFav, setIsFav] = useState(liked);
  const { mutate: mutateUnfav, error: unfavError, isLoading: load1 } = useUnfavourite();
  const { mutate: mutateFav, error: favError, isLoading: load2 } = useFavourite();
  const dispatch = useDispatch();
  useEffect(() => {
    if (unfavError || favError) {
      setError('error, contact admin');
    }
  }, [unfavError, favError]);
  const handleClick = () => {
    if (load1 || load2) return;
    if (isFav) {
      mutateUnfav({ id }, {
        onError: () => {
          setIsFav(true);
        },
        onSettled: () => {
          qc.invalidateQueries(['car', `${id}`]);
        },
      });
      dispatch(removeFav({ id }));
      setIsFav(false);
    } else {
      mutateFav({ id }, {
        onError: () => {
          setIsFav(false);
        },
        onSettled: () => {
          qc.invalidateQueries(['car', `${id}`]);
        },
      });
      dispatch(addFav({ id }));
      setIsFav(true);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`btn ${isFav ? 'btn-danger' : 'btn-primary'} w-100 mt-1`}
        onClick={handleClick}
      >
        {isFav ? 'remove from favs' : 'add to favs'}
      </button>
      <p>{error}</p>
    </>
  );
};

CarFavUnfavBtn.propTypes = {
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default CarFavUnfavBtn;
