import React, { memo, useContext } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaOptions } from '@src/shared/schema';

import Button from '@src/components/UI/Button/Button';
import Input from '@src/components/UI/Input/Input';
import Checkbox from '@src/components/UI/Checkbox/Checkbox';
import Select from '@src/components/UI/Select/Select';
import { ReactComponent as ArrowSvg } from '@src/assets/img/arrow.svg';
import Dropbox from '@src/components/UI/Dropbox/Dropbox';
import { useDispatch } from 'react-redux';
import { changeAvatar, changeInfo, deleteAvatar, changePassword } from '@src/store/actions/optionsActions';
import Loader from '@src/components/Loader/Loader';
import { LanguageContext } from '@src/shared/context';

const OptionsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.auth.userInfo);
  const userKey = useSelector(state => state.auth.userKey);
  const loading = useSelector(state => state.options.loading);
  const error = useSelector(state => state.options.error);
  const wrongPassword = useSelector(state => state.options.wrongPassword);
  const submitInfo = (userKey, data) => dispatch(changeInfo(userKey, data));
  const submitAvatar = (data, uid) => dispatch(changeAvatar(data, uid));
  const changeCurrentPassword = data => dispatch(changePassword(data));
  const deleteAvatarAction = (uid, userInfo, userKey) => dispatch(deleteAvatar(uid, userInfo, userKey));
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schemaOptions) });
  const withPassword = watch('withPassword');
  const resources = useContext(LanguageContext);

  const submitOptionsHandler = data => {
    console.log(data);
    if (data.avatar) {
      if (!data.withPassword && data.avatar.length <= 0) {
        const newData = { ...userInfo, theme: data.theme };
        submitInfo(userKey, newData);
      }

      if (!data.withPassword && data.avatar.length > 0) {
        const newData = { ...userInfo, theme: data.theme, avatar: data.avatar[0].name };
        submitInfo(userKey, newData);
        submitAvatar(data, userInfo.uid);
        reset({ avatar: null });
      }

      if (data.withPassword && data.avatar.length <= 0) {
        const newData = { ...userInfo, theme: data.theme };
        submitInfo(userKey, newData);
        changeCurrentPassword(data);
      }

      if (data.withPassword && data.avatar.length > 0) {
        const newData = { ...userInfo, theme: data.theme, avatar: data.avatar[0].name };
        submitInfo(userKey, newData);
        submitAvatar(data, userInfo.uid);
        changeCurrentPassword(data);
        reset({ avatar: null });
      }
    } else {
      if (!data.withPassword) {
        const newData = { ...userInfo, theme: data.theme };
        submitInfo(userKey, newData);
      }
    }
  };

  const deleteAvatarHandler = () => {
    deleteAvatarAction(userInfo.uid, userInfo, userKey);
  };

  const avatarSection = userInfo?.avatar ? (
    <Button className="options-page__delete" onClick={deleteAvatarHandler}>
      {resources.options_delete_avatar}
    </Button>
  ) : (
    <Dropbox name="avatar" control={control} />
  );

  return (
    <div className="options-page">
      <h2 className="options-page__title">{resources.options_title}</h2>
      <form className="options-page__form" onSubmit={handleSubmit(submitOptionsHandler)}>
        <Button className="options-page__form-button" onClick={() => history.goBack()}>
          <ArrowSvg />
        </Button>
        {withPassword && (
          <>
            <Input
              title={resources.options_change_password}
              placeholder={resources.options_old_password}
              type="password"
              {...register('oldPassword')}
              errors={!!errors.oldPassword || !!wrongPassword}
              errorsMessage={errors?.oldPassword?.message || wrongPassword?.message}
            />
            <Input
              placeholder={resources.options_new_password}
              type="password"
              {...register('newPassword')}
              errors={!!errors.newPassword}
              errorsMessage={errors?.newPassword?.message}
            />
          </>
        )}
        <Checkbox
          title={resources.options_change_password_checkbox}
          withValue
          {...register('withPassword')}
        />
        <Select
          defaultValue={userInfo?.theme}
          name="theme"
          control={control}
          errors={!!errors.theme}
          errorsMessage={errors?.theme?.message}
        />
        {avatarSection}
        {loading && <Loader />}
        <Button disabled={loading} type="submit">
          {resources.options_save_changes}
        </Button>
        {error && <p>error.message</p>}
      </form>
    </div>
  );
};

export default memo(OptionsPage);
