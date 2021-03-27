import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, children, className, onClick }) => {
  className = className ? ` ${className}` : '';

  return (
    <button className={`button${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  children: '',
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
