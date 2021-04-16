import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Textarea = forwardRef((props, ref) => {
  const {
    autoCorrect,
    autoComplete,
    onBlur,
    onChange,
    label,
    disabled,
    name,
    className,
    errors,
    errorsMessage,
  } = props;
  const textareaClassName = className ? ` ${className}` : '';

  return (
    <label className="label textarea-field">
      <span className="textarea-field__label">{label}</span>
      <textarea
        className={`textarea${textareaClassName}`}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        name={name}
      />
      {errors && <span className="input-field__error">{errorsMessage}</span>}
    </label>
  );
});

Textarea.defaultProps = {
  label: '',
  onChange: () => {},
  onBlur: () => {},
  autoComplete: 'on',
  autoCorrect: 'on',
  disabled: false,
  name: '',
};

Textarea.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.oneOf(['off', 'on']),
  autoCorrect: PropTypes.oneOf(['off', 'on']),
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Textarea;
