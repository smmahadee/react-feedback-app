import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  isdisabled: false,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDesabled: PropTypes.bool,
};

export default Button;
