'use client';
import Button from '@/app/ui/Button/Button';
import style from '@/app/auth/sign-up/page.module.scss';
import Image from 'next/image';
import LogInImage from '@/public/log-in-img/log_in-image.png';
import { useForm } from 'react-hook-form';
import { signUpSchema } from '@/public/validation/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { authorization } from '@/public/util/getUser';
import { InputDataRegisterType } from '@/app/lib/definitions';

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputDataRegisterType>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: InputDataRegisterType) => {
    authorization(data);
    reset();
  };

  return (
    <section className={style.log_in__section}>
      <div>
        <h1 className={style.log_in__title}> Sign Up </h1>
        <form onSubmit={handleSubmit(onSubmit)} className={style.log_in__form}>
          <input
            {...register('email')}
            type='email'
            placeholder='Email'
            className={style.log_in__input}
          />
          <p className={style.log_in__description}>Enter your email</p>
          <p className={style.log_in__description_error}>
            {errors.email?.message}
          </p>
          <input
            {...register('password')}
            type='password'
            placeholder='Password replay'
            className={style.log_in__input}
          />
          <p className={style.log_in__description}>Enter your password</p>
          <p className={style.log_in__description_error}>
            {errors.password?.message}
          </p>
          <input
            {...register('passwordReplay')}
            type='password'
            placeholder='Password replay'
            className={style.log_in__input}
          />
          <p className={style.log_in__description}>
            Repeat your password without errors
          </p>
          <p className={style.log_in__description_error}>
            {errors.password?.message}
          </p>
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
