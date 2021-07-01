import PropTypes from 'prop-types';

const ErrorText = ({ error }) => (
  <div className={`${error ? '' : 'd-none'} text-danger`}>
    {error}
  </div>
);

export default ErrorText;

ErrorText.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.bool.isRequired,
  ]).isRequired,
};
