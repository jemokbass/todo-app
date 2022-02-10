import React from 'react';
import { render } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import Dropbox from './Dropbox';

const MockDropbox = props => {
  const { control } = useForm();

  return <Dropbox control={control} name="mock" {...props} />;
};

describe('Dropbox UI component', () => {
  it('Should render dropbox component', () => {
    render(<MockDropbox />);
  });

  describe('Should render snapshots', () => {
    it('Should render empty dropbox snapshot', () => {
      const { asFragment } = render(<MockDropbox />);
      expect(asFragment(<MockDropbox />)).toMatchSnapshot();
    });
  });
});
