'use client';
import Button from '@/app/ui/Button/Button';
import style from './page.module.scss';
import Image from 'next/image';
import LogInImage from '@/public/log-in-img/log_in-image.png';
import { useForm } from 'react-hook-form';
import { signUpSchema } from '@/public/validation/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputDataRegisterType, InputDataType } from '@/app/lib/definitions';
import { signUpApi } from '@/api/clientApi/authApi';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/app/lib/contexts/UserContext';
import Input from '@/app/ui/Input/TextInput';

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputDataRegisterType>({
    resolver: yupResolver(signUpSchema),
  });
  const { setUserData } = useUserContext();

  const onSubmit = async (data: InputDataType) => {
    try {
      const response = await signUpApi({
        email: data.email,
        password: data.password,
      });
      setUserData(response);
      router.replace('/profile');
    } catch (error) {
      console.log('ERROR signup', error);
    }
  };

  return (
    <section className={style.log_in__section}>
      <div>
        <h1 className={style.log_in__title}> Sign Up </h1>
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
          <Input
            {...register('passwordReplay')}
            type='password'
            placeholder='Password replay'
            className={style.log_in__input}
          />
          <p className={style.log_in__description}>
            Repeat your password without errors
          </p>
          <p className={style.log_in__description_error}>
            {errors.passwordReplay?.message}
          </p>
          <Button
            type='submit'
            text='Sign Up'
            className={style.log_in__button}
          />
        </form>
      </div>
      <Image src={LogInImage} alt='Man read' />
    </section>
  );
};

export default RegisterPage;
