import React from 'react';
import { render, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

describe('Checkbox component', () => {
  it('Should render Checkbox component', () => {
    render(<Checkbox />);
  });

  it('Should render checkbox with title', () => {
    render(<Checkbox title="title" />);
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });

  describe('Should render snapshots', () => {
    it('Should render empty snapshot checkbox', () => {
      const { asFragment } = render(<Checkbox />);
      expect(asFragment(<Checkbox />)).toMatchSnapshot();
    });
  });

  describe('Default props', () => {
    it('Should use default onChange', () => {
      const res = Checkbox.defaultProps.onClick;
      expect(res).toBe(undefined);
    });
  });

  it('Should use default disabled', () => {
    const res = Checkbox.defaultProps.disabled;
    expect(res).toBe(false);
  });

  it('Should use default name', () => {
    const res = Checkbox.defaultProps.name;
    expect(res).toBe('');
  });

  it('Should use default title', () => {
    const res = Checkbox.defaultProps.title;
    expect(res).toBe('');
  });
});
