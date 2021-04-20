import * as yup from 'yup';

export const schemaSignUp = yup.object().shape({
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

export const schemaSignIn = yup.object().shape({
  email: yup.string().email('Email should have correct format').required('Email is a required field'),
  password: yup
    .string()
    .min(7, 'Password should more 6 characters')
    .max(15, 'Password should not more 15 characters')
    .required('Password is a required field'),
});

export const schemaNewTodo = yup.object().shape({
  title: yup.string().required('Title is a required field'),
  text: yup.string().required('Text is a required field'),
});

const requiredForPassword = {
  is: true,
  then: yup
    .string()
    .min(7, 'Password should more 6 characters')
    .max(15, 'Password should not more 15 characters')
    .required('Password is a required field'),
};

export const schemaOptions = yup.object().shape({
  withPassword: yup.bool().default(false),
  oldPassword: yup
    .string()
    .when('withPassword', requiredForPassword),
  newPassword: yup
    .string()
    .when('withPassword', requiredForPassword),
  theme: yup.object('').required('Theme is a required field').nullable(),
});
