import { string, object } from 'yup';

export const logInSchema = object().shape({
  email: string().email('Email is not correct').required('Email required'),
  password: string()
    .min(6, 'Password must be longer than 6')
    .required('Password required'),
});

export const signUpSchema = object().shape({
  email: string().email('Email is not correct').required('Email required'),
  password: string()
    .min(6, 'Password must be longer than 6')
    .required('Password required'),
  passwordReplay: string()
    .min(6, 'Password must be longer than 6')
    .required('Password required')
    .oneOf(['password', 'Passwords are different']),
});

export const userSchema = object().shape({
  name: string().min(1, 'Name must be longer than 1').required(),
  email: string().email('Email is not correct').required('Email required'),
});
