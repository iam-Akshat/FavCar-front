/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Collapse } from 'bootstrap';
import Navbar from './components/Navbar';

const AppShell = ({ children }) => (
  <div className="App">
    <Navbar />
    {children}
  </div>
);

AppShell.defaultProps = {
  children: null,
};
AppShell.propTypes = {
  children: PropTypes.element,
};
export default AppShell;
