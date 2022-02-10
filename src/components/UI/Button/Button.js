import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { type, children, onClick, disabled, className } = props;
  const buttonClassName = className ? ` ${className}` : '';

  return (
    <button className={`button${buttonClassName}`} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  children: '',
  onClick: () => {},
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
