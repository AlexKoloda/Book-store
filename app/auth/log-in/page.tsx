'use client';
import Button from '@/app/ui/Button/Button';
import style from './page.module.scss';
import Image from 'next/image';
import LogInImage from '@/public/log-in-img/log_in-image.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '@/public/validation/schemas';
import { signInApi } from '@/api/clientApi/authApi';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/app/lib/contexts/UserContext';
import { InputDataAuthorizationType, InputDataType } from '@/app/lib/definitions';
import Input from '@/app/ui/Input/TextInput';


const LoginPage: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputDataAuthorizationType>({
    resolver: yupResolver(logInSchema),
  });
  const { setUserData } = useUserContext();

  const onSubmit = async (data: InputDataType) => {
    try {
      const response = await signInApi({
        email: data.email,
        password: data.password,
      });
      setUserData(response);
      router.replace('/');
    } catch (err) {
      console.log('ERROR login', err);
    }
  };

  return (
    <section className={style.log_in__section}>
      <div>
        <h1 className={style.log_in__title}> Log in </h1>
        <form onSubmit={handleSubmit(onSubmit)} className={style.log_in__form}>
          <Input
            {...register('email')}
            type='email'
            placeholder='Email'
            className={style.log_in__input}
          />
          <p className={style.log_in__description}>Enter your email</p>
          <p className={style.log_in__description_error}>
            {errors.email?.message}
          </p>
          <Input
            {...register('password')}
            type='password'
            placeholder='Password'
            className={style.log_in__input}
          />
          <p className={style.log_in__description}>Enter your password</p>
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

export default LoginPage;
