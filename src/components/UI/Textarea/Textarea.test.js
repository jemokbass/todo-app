import React from 'react';
import { render } from '@testing-library/react';

import Textarea from './Textarea';

describe('Textarea UI component', () => {
  it('Should render textarea component', () => {
    render(<Textarea />);
  });

  describe('Should render snapshots', () => {
    it('Should render empty textarea snapshot', () => {
      const { asFragment } = render(<Textarea />);
      expect(asFragment(<Textarea />)).toMatchSnapshot();
    });

    it('Should render disabled textarea snapshot', () => {
      const { asFragment } = render(<Textarea disabled />);
      expect(asFragment(<Textarea disabled />)).toMatchSnapshot();
    });
  });

  describe('Default props', () => {
    it('Should use default disabled', () => {
      const res = Textarea.defaultProps.disabled;
      expect(res).toBe(false);
    });

    it('Should use default name', () => {
      const res = Textarea.defaultProps.name;
      expect(res).toBe('');
    });

    it('Should use default label', () => {
      const res = Textarea.defaultProps.label;
      expect(res).toBe('');
    });

    it('Should use default autoComplete', () => {
      const res = Textarea.defaultProps.autoComplete;
      expect(res).toBe('on');
    });

    it('Should use default autoCorrect', () => {
      const res = Textarea.defaultProps.autoCorrect;
      expect(res).toBe('on');
    });
  });
});
