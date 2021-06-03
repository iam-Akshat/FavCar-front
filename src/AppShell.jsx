import PropTypes from 'prop-types';

const AppShell = ({ children }) => (
  <div className="App">
    <h1>App Shell</h1>
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
