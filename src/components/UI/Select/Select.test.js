import React from 'react';
import { render } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import Select from './Select';

const MockSelect = props => {
  const { control } = useForm();

  return <Select control={control} {...props} />;
};

describe('Select UI component', () => {
  it('Should render select component', () => {
    render(<MockSelect />);
  });

  it('Should render select with defaultValue', () => {
    const defaultValue = { value: 'mock', label: 'Mock' };
    render(<MockSelect defaultValue={defaultValue} />);
  });

  describe('Should render snapshots', () => {
    it('Should render empty select snapshot', () => {
      const { asFragment } = render(<MockSelect />);
      expect(asFragment(<MockSelect />)).toMatchSnapshot();
    });

    it('Should render disabled select snapshot', () => {
      const { asFragment } = render(<MockSelect disabled />);
      expect(asFragment(<MockSelect disabled />)).toMatchSnapshot();
    });
  });

  describe('Default props', () => {
    it('Should use default disabled', () => {
      const res = Select.defaultProps.disabled;
      expect(res).toBe(false);
    });

    it('Should use default name', () => {
      const res = Select.defaultProps.name;
      expect(res).toBe('');
    });

    it('Should use default defaultValue', () => {
      const res = Select.defaultProps.defaultValue;
      expect(res).toBe('');
    });
  });
});
