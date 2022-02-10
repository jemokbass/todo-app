import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input UI component', () => {
  it('Should render input component', () => {
    render(<Input />);
  });

  it('Should render input with placeholder', () => {
    render(<Input placeholder="placeholder" />);
    expect(screen.getByPlaceholderText(/placeholder/i)).toBeInTheDocument();
  });

  it('Should render input with name', () => {
    render(<Input name="name" />);
  });

  describe('Should render snapshots', () => {
    it('Should render empty input snapshot', () => {
      const { asFragment } = render(<Input />);
      expect(asFragment(<Input />)).toMatchSnapshot();
    });

    it('Should render input with label snapshot', () => {
      const { asFragment } = render(<Input label="label" />);
      expect(asFragment(<Input label="label" />)).toMatchSnapshot();
    });

    it('Should render disabled input snapshot', () => {
      const { asFragment } = render(<Input disabled />);
      expect(asFragment(<Input disabled />)).toMatchSnapshot();
    });
  });

  describe('Default props', () => {
    it('Should use default label', () => {
      const res = Input.defaultProps.label;
      expect(res).toBe('');
    });

    it('Should use default type', () => {
      const res = Input.defaultProps.type;
      expect(res).toBe('text');
    });

    it('Should use default autoComplete', () => {
      const res = Input.defaultProps.autoComplete;
      expect(res).toBe('off');
    });

    it('Should use default autoCorrect', () => {
      const res = Input.defaultProps.autoCorrect;
      expect(res).toBe('off');
    });

    it('Should use default disabled', () => {
      const res = Input.defaultProps.disabled;
      expect(res).toBe(false);
    });

    it('Should use default name', () => {
      const res = Input.defaultProps.name;
      expect(res).toBe('');
    });
  });
});
