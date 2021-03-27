import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ value, onChange, label, className }) => {
  className = className ? ` ${className}` : '';

  return (
    <label className="label">
      <span className="textarea-label">{label}</span>
      <textarea className={`textarea${className}`} onChange={onChange} value={value} />
    </label>
  );
};

Textarea.defaultProps = {
  label: '',
  onChange: () => {},
  value: '',
};

Textarea.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Textarea;
