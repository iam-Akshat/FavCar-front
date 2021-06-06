import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarPageNavbar = ({ name }) => (
  <nav
    className="nav d-flex justify-content-between px-2 align-items-center px-1 py-2 fs-3"
  >
    <Link to="/" href="/" className="text-decoration-none"> &lt; </Link>
    <p className="my-auto text-bold">{name}</p>
    <p>{'  '}</p>
  </nav>
);

CarPageNavbar.propTypes = {
  name: PropTypes.string.isRequired,
};
export default CarPageNavbar;
