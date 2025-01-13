'use client';
import Button from '@/app/ui/button/button';
import style from './page.module.scss';
import Image from 'next/image';
import LogInImage from '@/public/log-in-img/log_in-image.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '@/public/validation/schemas';
import getUser from '@/public/util/getUser';

type TInputs = {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<TInputs>({
      resolver: yupResolver(logInSchema)
    });  

    const onSubmit = ( data: TInputs ) => {
      getUser(data);
      reset();
    }


  return (
    <section className={style.log_in__section}>
      <div>
        <h1 className={style.log_in__title}> Log in </h1>
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className={style.log_in__form}>
          <input
            {...register('email')}
            type='email'
            placeholder='Email'
           className={style.log_in__input}
            />
          <p className={style.log_in__description}>Enter your email</p>
          <p className={style.log_in__description_error}>{errors.email?.message}</p>
          <input
            {...register('password')}
            type='password'
            placeholder='Password'
            className={style.log_in__input}
            />
          <p className={style.log_in__description}>Enter your password</p>
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

export default LoginPage;
