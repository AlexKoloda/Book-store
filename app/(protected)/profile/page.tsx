'use client';
import userAvatar from '@/public/profile-img/userAvatar.png';
import Image from 'next/image';
import style from './page.module.scss';
import Button from '@/app/ui/Button/Button';
import { useUserContext } from '@/app/lib/contexts/UserContext';
import { UserProfileType } from '@/app/lib/definitions';
import { userSchema } from '@/public/validation/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { updateInformationApi } from '@/api/clientApi/updateApi';
import { deleteCookie } from 'cookies-next/client';
import { redirect } from 'next/navigation';

const Profile = () => {
  const [isChange, setIsChange] = useState(true);
  const { user } = useUserContext();
  const { setUserData } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfileType>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data: UserProfileType) => {
    setIsChange(true);
    data.id = user?.id;
    updateInformationApi(data);
  };

  const toggleChange = () => {
    setIsChange(false);
  };

  const logOut = () => {
    deleteCookie('access_token');
    setUserData(null);
    redirect('/');
  };

  return (
    <section className={style.profile__section}>
      <div className={style.profile__avatar}>
        <Image src={userAvatar} alt='User Avatar' />
        <Button
          text='Logout'
          type='button'
          className='button'
          onClick={logOut}
        />
      </div>
      {isChange ? (
        <form
          name='personalInformation'
          onSubmit={handleSubmit(onSubmit)}
          className={style.profile__form}
        >
          <div className={style.profile__container}>
            <h1 className={style.profile__title}>Personal information</h1>
            <div className={style.profile__button} onClick={toggleChange}>
              Change information
            </div>
          </div>
          <input
            {...register('name')}
            className={style.profile__input}
            type='name'
            placeholder={user?.name}
            readOnly={true}
          />

          <input
            {...register('email')}
            className={style.profile__input}
            type='email'
            placeholder={user?.email}
            readOnly={true}
          />

          <div className={style.profile__container}>
            <h1 className={style.profile__title}>Password</h1>
            <button className={style.profile__button}>
              Change information
            </button>
          </div>
          <input
            value={'******'}
            className={style.profile__input}
            type='password'
            placeholder='Your password'
            readOnly={true}
          />
          <p className={style.profile__description_error}></p>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={style.profile__form}>
          <div className={style.profile__container}>
            <h1 className={style.profile__title}>Personal information</h1>
            <button className={style.profile__button}>
              Change information
            </button>
          </div>
          <input
            {...register('name')}
            className={style.profile__input}
            type='name'
            placeholder='Your name'
            defaultValue={user?.name}
          />
          <p className={style.profile__description_error}>
            {errors.name?.message}
          </p>
          <input
            {...register('email')}
            className={style.profile__input}
            type='email'
            placeholder='Your email'
            defaultValue={user?.email}
          />
          <p className={style.profile__description_error}>
            {errors.email?.message}
          </p>

          <div className={style.profile__container}>
            <h1 className={style.profile__title}>Password</h1>
            <button className={style.profile__button} onClick={toggleChange}>
              Change information
            </button>
          </div>
          <input
            value={'******'}
            className={style.profile__input}
            type='password'
            placeholder='Your password'
          />
          <p className={style.profile__description_error}></p>
          <Button
            text='Confirm'
            type='submit'
            onClick={toggleChange}
            className={style.profile__button_submit}
          />
        </form>
      )}
    </section>
  );
};

export default Profile;
