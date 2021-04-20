import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect } from 'react-router';
import { schemaSignIn } from '@src/shared/schema';

import Input from '@src/components/UI/Input/Input';
import Button from '@src/components/UI/Button/Button';
import Loader from '@src/components/Loader/Loader';
import { signIn } from '@src/store/actions/authActions';

const SignInPage = props => {
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  const submitForm = auth => dispatch(signIn(auth));
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schemaSignIn) });

  const submitSignInHandler = data => {
    submitForm(data);
    setSuccessfulSubmit(true);
  };

  return (
    <div className="sign-in-page">
      <h2 className="sign-in-page__title">Sign In</h2>
      <form id="sign-in" className="sign-in-page__form" onSubmit={handleSubmit(submitSignInHandler)}>
        <Input
          label="Mail"
          type="email"
          errors={!!errors.email}
          errorsMessage={errors?.email?.message}
          placeholder="johnabrams@mail.com"
          {...register('email')}
        />
        <Input
          label="Password"
          type="password"
          errors={!!errors.password}
          errorsMessage={errors?.password?.message}
          placeholder="d22DAsc4ee"
          {...register('password')}
        />
        {loading && <Loader />}
        <Button type="submit" disabled={loading || error}>
          Sign In
        </Button>
        {error && <p>{error.message}</p>}
      </form>
      {successfulSubmit && <Redirect to="/" />}
    </div>
  );
};

export default memo(SignInPage);
