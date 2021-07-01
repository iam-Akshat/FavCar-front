import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const CarPageNavbar = ({ name }) => {
  const history = useHistory();
  return (
    <nav
      className="nav d-flex justify-content-between px-2 align-items-center px-1 py-3 fs-3"
    >
      <button
        type="button"
        style={{ border: 'none', backgroundColor: 'transparent' }}
        onClick={() => { history.goBack(); }}
        className="text-muted"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
      </button>
      <p className="my-auto text-bold fs-5">{name}</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
    </nav>
  );
};

CarPageNavbar.propTypes = {
  name: PropTypes.string.isRequired,
};
export default CarPageNavbar;
