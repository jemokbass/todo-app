import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CheckSvg } from '@src/assets/img/check.svg';

const Checkbox = forwardRef((props, ref) => {
  const { checked, onChange, onBlur, disabled, name, title, onClick } = props;

  return (
    <div className="check">
      <div className="check-input">
        <input
          className="checkbox"
          type="checkbox"
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          ref={ref}
          name={name}
          onClick={onClick}
        />
        <CheckSvg className="check-input__icon" />
      </div>
      <p className="check__title">{title}</p>
    </div>
  );
});

Checkbox.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  disabled: false,
  title: '',
  name: '',
};

Checkbox.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};

export default Checkbox;
