/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Collapse } from 'bootstrap';

const AppShell = ({ children }) => (
  <div className="App">
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
