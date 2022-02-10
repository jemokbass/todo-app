import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef((props, ref) => {
  const {
    type,
    label,
    autoComplete,
    autoCorrect,
    errors,
    errorsMessage,
    onChange,
    onBlur,
    placeholder,
    disabled,
    name,
    className,
  } = props;
  const inputClassName = className ? ` ${className}` : '';

  return (
    <label className="label input-field">
      <span className="input-field__label">{label}</span>
      <input
        className={`input${inputClassName}`}
        type={type}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
      />
      {errors && <span className="input-field__error">{errorsMessage}</span>}
    </label>
  );
});

Input.defaultProps = {
  label: '',
  type: 'text',
  onChange: () => {},
  onBlur: () => {},
  autoComplete: 'off',
  autoCorrect: 'off',
  disabled: false,
  name: '',
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'radio', 'checkbox', 'email', 'file', 'number', 'tel', 'password']),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.oneOf(['off', 'on']),
  autoCorrect: PropTypes.oneOf(['off', 'on']),
  disabled: PropTypes.bool,
  name: PropTypes.string,
};

export default Input;
