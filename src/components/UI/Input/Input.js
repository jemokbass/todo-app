import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef((props, ref) => {
  let {
    type,
    label,
    className,
    autoComplete,
    autoCorrect,
    name,
    errors,
    errorsMessage,
    onChange,
    onBlur,
    placeholder,
  } = props;
  className = className ? ` ${className}` : '';

  return (
    <label className="label input-field">
      <span className="input-field__label">{label}</span>
      <input
        className={`input${className}`}
        type={type}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {errors && <span className="input-field__error">{errorsMessage}</span>}
    </label>
  );
});

Input.defaultProps = {
  label: '',
  type: 'text',
  onChange: () => {},
  value: '',
  autoComplete: 'off',
  autoCorrect: 'off',
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'radio', 'checkbox', 'email', 'file', 'number', 'tel', 'password']),
  onChange: PropTypes.func,
  value: PropTypes.string,
  autoComplete: PropTypes.oneOf(['off', 'on']),
  autoCorrect: PropTypes.oneOf(['off', 'on']),
};

export default Input;
