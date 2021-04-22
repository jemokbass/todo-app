import React from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const Select = props => {
  const { className, name, disabled, errors, errorsMessage, control, defaultValue } = props;
  const options = [
    { value: 'standard', label: 'Standard' },
    { value: 'dark', label: 'Dark' },
  ];
  const selectClassName = className ? ` ${className}` : '';

  return (
    <div className="select-field">
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <ReactSelect
            className={`react-select${selectClassName}`}
            options={options}
            name={name}
            isDisabled={disabled}
            {...field}
          />
        )}
      />
      {errors && <span className="select-field__error">{errorsMessage}</span>}
    </div>
  );
};

Select.defaultProps = {
  disabled: false,
  onBlur: () => {},
  onChange: () => {},
  name: '',
  defaultValue: '',
};

Select.propTypes = {
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default Select;
