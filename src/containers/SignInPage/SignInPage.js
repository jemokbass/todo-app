import React, { memo, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect } from 'react-router-dom';
import { schemaSignInEn, schemaSignInRu } from '@src/shared/schema';

import Input from '@src/components/UI/Input/Input';
import Button from '@src/components/UI/Button/Button';
import Loader from '@src/components/Loader/Loader';
import { signIn } from '@src/store/actions/authActions';
import { LanguageContext } from '@src/shared/context';

const SignInPage = () => {
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const isAuth = useSelector(state => state.auth.isAuth);
  const language = useSelector(state => state.options.language);
  const dispatch = useDispatch();
  const submitForm = auth => dispatch(signIn(auth));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(language === 'en' ? schemaSignInEn : schemaSignInRu) });
  const resources = useContext(LanguageContext);

  const submitSignInHandler = data => {
    submitForm(data);
    if (isAuth) {
    }
  };

  useEffect(() => {}, [language]);

  return (
    <section className="sign-in-page">
      <h2 className="sign-in-page__title">{resources.sign_in_title}</h2>
      <form id="sign-in" className="sign-in-page__form" onSubmit={handleSubmit(submitSignInHandler)}>
        <Input
          label={resources.sign_in_mail}
          type="email"
          autoComplete="on"
          errors={!!errors.email}
          errorsMessage={errors?.email?.message}
          placeholder="johnabrams@mail.com"
          {...register('email')}
        />
        <Input
          label={resources.sign_in_password}
          type="password"
          errors={!!errors.password}
          errorsMessage={errors?.password?.message}
          placeholder="d22DAsc4ee"
          {...register('password')}
        />
        {loading && <Loader />}
        <Button type="submit" disabled={loading}>
          {resources.sign_in_button}
        </Button>
        {error && <p className="error">{error.message}</p>}
      </form>
      {isAuth && <Redirect to="/" />}
    </section>
  );
};

export default memo(SignInPage);
