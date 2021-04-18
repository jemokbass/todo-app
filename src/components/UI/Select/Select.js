import React from 'react';
import ReactSelect from 'react-select';

const Select = props => {
  const { className, onChange, name } = props;
  const options = [
    { value: 'standard', label: 'Standard' },
    { value: 'dark', label: 'Dark' },
  ];
  const selectClassName = className ? `${className}` : '';

  return (
    <ReactSelect
      className={`react-select${selectClassName}`}
      options={options}
      onChange={onChange}
      name={name}
    />
  );
};

export default Select;
