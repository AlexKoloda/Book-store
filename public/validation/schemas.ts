import { string, object, ref } from 'yup';

export const logInSchema = object().shape({
  email: string().email('Email is not correct').required('Email required'),
  password: string()
    .min(6, 'Password must be longer than 6')
    .required('Password required'),
});

export const signUpSchema = object().shape({
  email: string().email('Email is not correct').required('Email required'),
  password: string()
    .min(6, 'Password must be longer than 5')
    .required('Password required'),
  passwordReplay: string()
    .min(6, 'Password must be longer than 5')
    .required('Repeat password')
    .oneOf([ref('password'), 'Passwords are different']),
});

export const userSchema = object().shape({
  name: string().min(1, 'Name must be longer than 1').required(),
  email: string().email('Email is not correct').required('Email required'),
});

export const passwordUpdateSchema = object().shape({
  oldPassword: string()
    .min(6, 'Password must be longer than 5')
    .required('Password required'),
  newPassword: string()
    .min(6, 'Password must be longer than 5')
    .required('Password required'),
  passwordReplay: string()
    .min(6, 'Password must be longer than 5')
    .required('Repeat password')
    .oneOf([ref('newPassword'), 'Passwords are different']),
});
