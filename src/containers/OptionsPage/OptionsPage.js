import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Button from '@src/components/UI/Button/Button';
import Input from '@src/components/UI/Input/Input';
import Checkbox from '@src/components/UI/Checkbox/Checkbox';

const OptionsPage = () => {
  const history = useHistory();
  const [withPassword, setWithPassword] = useState(false);

  return (
    <div className="options-page">
      <h2 className="options-page__title">Options</h2>
      <div className="options-page__form">
        <Button className="options-page__form-button" onClick={() => history.goBack()}>
          {'<'}
        </Button>
        {withPassword && (
          <>
            <Input title="Change Passwords" placeholder="Old Password" />
            <Input placeholder="New Password" />
          </>
        )}
        <Checkbox
          title="Change password?"
          withValue
          value={withPassword}
          onClick={() => {
            setWithPassword(prevState => !prevState);
          }}
        />
        <Button>Save changes</Button>
      </div>
    </div>
  );
};

export default OptionsPage;
