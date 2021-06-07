import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const CarPageNavbar = ({ name }) => {
  const history = useHistory();
  return (
    <nav
      className="nav d-flex justify-content-between px-2 align-items-center px-1 py-2 fs-3"
    >
      <button
        type="button"
        style={{ border: 'none', backgroundColor: 'transparent' }}
        onClick={() => { history.goBack(); }}
      >
        {' '}
        &lt;
      </button>
      <p className="my-auto text-bold">{name}</p>
      <p>{'  '}</p>
    </nav>
  );
};

CarPageNavbar.propTypes = {
  name: PropTypes.string.isRequired,
};
export default CarPageNavbar;
