import React from 'react';
import { useHistory } from 'react-router';
//import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaOptions } from '@src/shared/schema';

import Button from '@src/components/UI/Button/Button';
import Input from '@src/components/UI/Input/Input';
import Checkbox from '@src/components/UI/Checkbox/Checkbox';
import Select from '@src/components/UI/Select/Select';
import { ReactComponent as ArrowSvg } from '@src/assets/img/arrow.svg';
import Dropbox from '@src/components/UI/Dropbox/Dropbox';

const OptionsPage = () => {
  const history = useHistory();
  //const userInfo = useSelector(state => state.auth.userInfo);
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schemaOptions) });
  const withPassword = watch('withPassword');

  const submitOptionsHandler = data => {
    console.log(data);
  };

  return (
    <div className="options-page">
      <h2 className="options-page__title">Options</h2>
      <form className="options-page__form" onSubmit={handleSubmit(submitOptionsHandler)}>
        <Button className="options-page__form-button" onClick={() => history.goBack()}>
          <ArrowSvg />
        </Button>
        {withPassword && (
          <>
            <Input
              title="Change Passwords"
              placeholder="Old Password"
              {...register('oldPassword')}
              errors={!!errors.oldPassword}
              errorsMessage={errors?.oldPassword?.message}
            />
            <Input
              placeholder="New Password"
              {...register('newPassword')}
              errors={!!errors.newPassword}
              errorsMessage={errors?.newPassword?.message}
            />
          </>
        )}
        <Checkbox title="Change password?" withValue {...register('withPassword')} />
        <Select
          name="theme"
          control={control}
          errors={!!errors.theme}
          errorsMessage={errors?.theme?.message}
        />
        <Dropbox name="avatar" control={control} />
        <Button type="submit">Save changes</Button>
      </form>
    </div>
  );
};

export default OptionsPage;
