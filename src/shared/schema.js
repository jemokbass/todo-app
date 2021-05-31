import * as yup from 'yup';

export const schemaSignUpEn = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z]*$/, 'Name must contain only english letters')
    .required('Name is a required field'),
  email: yup.string().email('Email should have correct format').required('Email is a required field'),
  password: yup
    .string()
    .min(7, 'Password should more 6 characters')
    .max(15, 'Password should not more 15 characters')
    .required('Password is a required field'),
  phone: yup
    .string()
    .min(9, 'Phone should more 8 characters')
    .max(11, 'Phone should not more 11 characters')
    .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g, 'Phone should contain numbers')
    .required('Phone is a required field'),
});

export const schemaSignUpRu = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z]*$/, 'Имя может содержать только английские буквы')
    .required('Имя является обязательным полем'),
  email: yup.string().email('Почта имеет неправильный формат').required('Почта является обязательным полем'),
  password: yup
    .string()
    .min(7, 'Пароль должен быть более 6 символов')
    .max(15, 'Пароль должен быть менее 15 символов')
    .required('Пароль является обязательным полем'),
  phone: yup
    .string()
    .min(9, 'Телефон должен быть более 8 символов')
    .max(11, 'Телефон должен быть менее 11 символов')
    .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g, 'Телефон должен содержать только цифры')
    .required('Телефон является обязательным полем'),
});

export const schemaSignInEn = yup.object().shape({
  email: yup.string().email('Email should have correct format').required('Email is a required field'),
  password: yup
    .string()
    .min(7, 'Password should more 6 characters')
    .max(15, 'Password should not more 15 characters')
    .required('Password is a required field'),
});

export const schemaSignInRu = yup.object().shape({
  email: yup.string().email('Почта имеет неправильный формат').required('Почта является обязательным полем'),
  password: yup
    .string()
    .min(7, 'Пароль должен быть более 6 символов')
    .max(15, 'Пароль должен быть менее 15 символов')
    .required('Пароль является обязательным полем'),
});

export const schemaNewTodoEn = yup.object().shape({
  title: yup.string().required('Title is a required field'),
  text: yup.string().required('Text is a required field'),
});

export const schemaNewTodoRu = yup.object().shape({
  title: yup.string().required('Название является обязательным полем'),
  text: yup.string().required('Текст является обязательным полем'),
});

const requiredForPasswordEn = {
  is: true,
  then: yup
    .string()
    .min(7, 'Password should more 6 characters')
    .max(15, 'Password should not more 15 characters')
    .required('Password is a required field'),
};

export const schemaOptionsEn = yup.object().shape({
  withPassword: yup.bool().default(false),
  oldPassword: yup.string().when('withPassword', requiredForPasswordEn),
  newPassword: yup.string().when('withPassword', requiredForPasswordEn),
  theme: yup.object('').required('Theme is a required field').nullable(),
});

const requiredForPasswordRu = {
  is: true,
  then: yup
    .string()
    .min(7, 'Пароль должен быть более 6 символов')
    .max(15, 'Пароль должен быть менее 15 символов')
    .required('Пароль является обязательным полем'),
};

export const schemaOptionsRu = yup.object().shape({
  withPassword: yup.bool().default(false),
  oldPassword: yup.string().when('withPassword', requiredForPasswordRu),
  newPassword: yup.string().when('withPassword', requiredForPasswordRu),
  theme: yup.object('').required('Тема является обязательным полем').nullable(),
});
