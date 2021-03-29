import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, label, className, value, onChange }) => {
  className = className ? ` ${className}` : '';

  return (
    <label className="label input-field">
      <span className="input-field__label">{label}</span>
      <input className={`input${className}`} type={type} value={value} onChange={onChange} />
    </label>
  );
};

Input.defaultProps = {
  label: '',
  type: 'text',
  onChange: () => {},
  value: '',
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'radio', 'checkbox', 'email', 'file', 'number', 'tel']),
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
