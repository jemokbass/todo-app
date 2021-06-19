import React, { memo, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignUpEn, schemaSignUpRu } from '@src/shared/schema';
import parsePhoneNumberFromString from 'libphonenumber-js';

import Input from '@src/components/UI/Input/Input';
import Button from '@src/components/UI/Button/Button';
import Loader from '@src/components/Loader/Loader';
import { signUp } from '@src/store/actions/authActions';
import { Redirect } from 'react-router';
import { LanguageContext } from '@src/shared/context';

const SignUpPage = props => {
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.regError);
  const dispatch = useDispatch();
  const submitForm = (info, auth) => dispatch(signUp(info, auth));
  const language = useSelector(state => state.options.language);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(language === 'en' ? schemaSignUpEn : schemaSignUpRu) });
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const resources = useContext(LanguageContext);

  const normalizePhoneNumber = value => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (!phoneNumber) {
      return value;
    }
    return phoneNumber.formatInternational();
  };

  const submitSignUpHandler = data => {
    const info = {
      name: data.name,
      phone: data.phone,
      theme: { value: 'standard', label: 'Standard' },
      avatar: false,
    };
    const auth = { email: data.email, password: data.password };

    submitForm(info, auth);
    if (!loading) {
      setTimeout(() => setSuccessfulSubmit(true), 3000);
    }
  };

  useEffect(() => {}, [language]);

  return (
    <div className="sign-up-page">
      <h2 className="sign-up-page__title">{resources.sign_up_title}</h2>
      <form id="sign-up" className="sign-up-page__form" onSubmit={handleSubmit(submitSignUpHandler)}>
        <Input
          label={resources.sign_up_name}
          errors={!!errors.name}
          errorsMessage={errors?.name?.message}
          placeholder={resources.sign_up_name_placeholder}
          {...register('name')}
        />
        <Input
          label={resources.sign_up_mail}
          type="email"
          errors={!!errors.email}
          errorsMessage={errors?.email?.message}
          placeholder="johnabrams@mail.com"
          {...register('email')}
        />
        <Input
          label={resources.sign_up_password}
          type="password"
          errors={!!errors.password}
          errorsMessage={errors?.password?.message}
          placeholder="d22DAsc4ee"
          {...register('password')}
        />
        <Input
          label={resources.sign_up_phone}
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
        <Button type="submit" disabled={loading}>
          {resources.sign_up_button}
        </Button>
        {error && <p className="error">{error.message}</p>}
      </form>
      {successfulSubmit && <Redirect to="/sign-in" />}
    </div>
  );
};

export default memo(SignUpPage);
