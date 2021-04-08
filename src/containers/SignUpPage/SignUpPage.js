import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@src/shared/schema';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { useHistory } from 'react-router';

import Input from '@src/components/UI/Input/Input';
import Button from '@src/components/UI/Button/Button';
import Loader from '@src/components/Loader/Loader';
import { signUp } from '@src/store/actions/authActions';

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
  const history = useHistory()

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
    if (!loading && !error) {
      history.push('/')
    }
  };

  return (
    <div className="sign-up-page">
      <h2 className="sign-up-page__title">Sign Up</h2>
      <form className="sign-up-page__form" onSubmit={handleSubmit(submitSignUpHandler)}>
        <Input
          label="Name"
          errors={!!errors.name}
          errorsMessage={errors?.name?.message}
          {...register('name')}
          placeholder="John"
        />
        <Input
          label="Mail"
          type="email"
          errors={!!errors.email}
          errorsMessage={errors?.email?.message}
          {...register('email')}
          placeholder="jonhabrams@mail.com"
        />
        <Input
          label="Password"
          type="password"
          errors={!!errors.password}
          errorsMessage={errors?.password?.message}
          {...register('password')}
          placeholder="d22DAsc4ee"
        />
        <Input
          label="Phone"
          type="tel"
          errors={!!errors.phone}
          errorsMessage={errors?.phone?.message}
          {...register('phone')}
          onChange={event => {
            event.target.value = normalizePhoneNumber(event.target.value);
          }}
          placeholder="+7 999 777 20 20"
        />
        {loading && <Loader />}
        <Button type="submit">Sing Up</Button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default SignUpPage;
