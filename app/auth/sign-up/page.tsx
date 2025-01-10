'use client';
import Button from '@/app/ui/button/button';
import style from '@/app/auth/sign-up/page.module.scss';
import Image from 'next/image';
import LogInImage from '@/public/log-in-img/log_in-image.png';

import { useForm } from 'react-hook-form';

type TInputs = {
  email: string;
  password: string;
  passwordReplay: string;
}

const RegisterPage: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();


  return (
    <section className={style.log_in__section}>
      <div>
        <h1 className={style.log_in__title}> Sign Up </h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className={style.log_in__form}
        >
          <input
            {...register('email', { required: {
              value: true,
              message: 'Email required'
            } })}
            type='email'
            placeholder='Email'
            className={style.log_in__input}
          />
          <p className={style.log_in__description}>Enter your email</p>
          <p className={style.log_in__description_error}>{errors.email?.message}</p>
          <input
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Min length 6',
              },
            })}
            type='password'
            placeholder='Password replay'
            className={style.log_in__input}
          />
          <p className={style.log_in__description}>Enter your password</p>
          <p className={style.log_in__description_error}>{errors.password?.message}</p>
          <input
            {...register('passwordReplay', {
              required: true,
              minLength: {
                value: 6,
                message: 'Min length 6',
              },
            })}
            type='password'
            placeholder='Password replay'
            className={style.log_in__input}
          />
          <p className={style.log_in__description}>Repeat your password without errors</p>
          <p className={style.log_in__description_error}>{errors.password?.message}</p>
          <Button
            type='submit'
            text='Log In'
            className={style.log_in__button}
          />
        </form>
      </div>
      <Image src={LogInImage} alt='Man read' />
    </section>
  );
};

export default RegisterPage;
