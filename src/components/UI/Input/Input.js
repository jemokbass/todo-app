import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, label, className, value, onChange }) => {
  className = className ? ` ${className}` : '';

  return (
    <label className="label">
      <span className="input-label">{label}</span>
      <input className={`input${className}`} type={type} value={value} onChange={onChange} />
    </label>
  );
};

Input.defaultProps = {
  label: '',
  type: 'name',
  onChange: () => {},
  value: '',
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([]),
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
