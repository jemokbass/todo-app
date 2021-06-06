import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button UI component', () => {
  it('Should render button component', () => {
    render(<Button />);
  });

  it('Should render button with text', () => {
    render(<Button>text</Button>);
    expect(screen.getByText(/text/i)).toBeInTheDocument();
  });

  describe('Should render snapshots', () => {
    it('Should render snapshot empty button', () => {
      const { asFragment } = render(<Button />);
      expect(asFragment(<Button />)).toMatchSnapshot();
    });

    it('Should render snapshot disabled button', () => {
      const { asFragment } = render(<Button disabled />);
      expect(asFragment(<Button disabled />)).toMatchSnapshot();
    });

    it('Should render snapshot button with text Win', () => {
      const { asFragment } = render(<Button>Win</Button>);
      expect(asFragment(<Button>Win</Button>)).toMatchSnapshot();
    });
  });

  describe('DefaultProps', () => {
    it('Should use default onClick', () => {
      const res = Button.defaultProps.onClick();
      expect(res).toBe(undefined);
    });

    it('Should use default disabled', () => {
      const res = Button.defaultProps.disabled;
      expect(res).toBe(false);
    });

    it('Should use default type button', () => {
      const res = Button.defaultProps.type;
      expect(res).toBe('button');
    });
  });
});
