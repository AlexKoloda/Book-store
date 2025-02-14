'use client';
import InformationForm from '@/app/ui/InformationForm/InformationForm';
import PasswordForm from '@/app/ui/PasswordForm/PasswordForm';
import userAvatar from '@/public/profile-img/placeholderAvatar.png';
import convertBase64 from '@/app/lib/util/convertBase64';
import Image, { ImageLoader } from 'next/image';
import uploadImage from '@/public/profile-img/button_photo.png';
import style from './page.module.scss';
import Button from '@/app/ui/Button/Button';
import { useUserContext } from '@/app/lib/contexts/UserContext';
import { deleteCookie } from 'cookies-next/client';
import { redirect } from 'next/navigation';
import { ChangeEvent, useRef } from 'react';
import { updateUserPhoto } from '@/api/clientApi/updateApi';
import React from 'react';
import conf from '@/config';

const imageLoader: ImageLoader = ({ src }) => {
  return `${conf.url}/${src}`;
};

const Profile = () => {
  const { setUserData, setUpdateUser } = useUserContext();
  const { user } = useUserContext();
  const fileUpload = useRef(null);

  const logOut = () => {
    deleteCookie('access_token');
    setUserData(null);
    redirect('/');
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {

    if (!e.target.files) {
      return;
    }
    const type = e.target.files[0].type.split('/')[1];
    const base64File = await convertBase64(e.target.files[0]);
    const base64String = base64File.toString().split(',');
   
    const newAvatar = await updateUserPhoto({ type: type, avatar: base64String[1]});
    
    if (user) {  
      setUpdateUser({ avatar: newAvatar })
    }
  };

  return (
    <section className={style.profile__section}>
      <div className={style.profile__avatar}>
        {!user?.avatar ? (
          <Image src={userAvatar} alt='User Avatar' width={305} height={305} />
        ) : (
          <Image
            className={style.profile__photo}
            loader={imageLoader}
            src={user?.avatar}
            alt='User Avatar'
            width={305}
            height={305}
          />
        )}
        <label>
          <Image
            src={uploadImage}
            alt='upload button'
            className={style.profile__button_upload}
          />
          <input
            type='file'
            ref={fileUpload}
            onChange={handleChange}
            className={style.profile__hidden}
            accept='image/*'
          />
        </label>
        <Button
          text='Logout'
          type='button'
          className={style.profile__button_submit}
          onClick={logOut}
        />
      </div>
      <div className={style.profile__container}>
        <InformationForm />
        <PasswordForm />
      </div>
    </section>
  );
};

export default Profile;