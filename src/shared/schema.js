import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z]*$/, 'Name must contain only english letters')
    .required('Name is a required field'),
  email: yup.string().email('Email should have correct format').required('Email is a required field'),
  password: yup
    .string()
    .min(7, 'Password should more 7 characters')
    .max(15, 'Password should not more 15 characters')
    .required('Password is a required field'),
  phone: yup
    .string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g, 'Phone should contain numbers')
    .required('Phone is a required field'),
});
