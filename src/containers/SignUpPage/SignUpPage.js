import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@src/shared/schema';
import parsePhoneNumberFromString from 'libphonenumber-js';

import Input from '@src/components/UI/Input/Input';
import Button from '@src/components/UI/Button/Button';
import Loader from '@src/components/Loader/Loader';
import { signUp } from '@src/store/actions/authActions';
import { Redirect } from 'react-router';

const SignUpPage = props => {
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  const submitForm = (info, auth) => dispatch(signUp(info, auth));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  const normalizePhoneNumber = value => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (!phoneNumber) {
      return value;
    }
    return phoneNumber.formatInternational();
  };

  const submitSignUpHandler = data => {
    const info = { name: data.name, phone: data.phone };
    const auth = { email: data.email, password: data.password };

    submitForm(info, auth);
    if (!loading) {
      setTimeout(() => setSuccessfulSubmit(true), 3000);
    }
  };

  return (
    <div className="sign-up-page">
      <h2 className="sign-up-page__title">Sign Up</h2>
      <form id="sign-up" className="sign-up-page__form" onSubmit={handleSubmit(submitSignUpHandler)}>
        <Input
          label="Name"
          errors={!!errors.name}
          errorsMessage={errors?.name?.message}
          placeholder="John"
          {...register('name')}
        />
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
        <Input
          label="Phone"
          type="tel"
          errors={!!errors.phone}
          errorsMessage={errors?.phone?.message}
          onChange={event => {
            event.target.value = normalizePhoneNumber(event.target.value);
          }}
          placeholder="+7 999 777 20 20"
          {...register('phone')}
        />
        {loading && <Loader />}
        <Button type="submit" disabled={loading || error}>
          Sign Up
        </Button>
        {error && <p>{error.message}</p>}
      </form>
      {successfulSubmit && <Redirect to="/sign-in" />}
    </div>
  );
};

export default memo(SignUpPage);
