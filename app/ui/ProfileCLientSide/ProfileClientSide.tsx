'use client'
import React, { ChangeEvent, useRef } from 'react';
import conf from '@/config';
import style from './ProfileClientSide.module.scss';
import { useUserContext } from '@/app/lib/contexts/UserContext';
import { updateUserPhoto } from '@/api/clientApi/updateApi';
import { deleteCookie } from 'cookies-next/client';
import { redirect } from 'next/navigation';
import convertBase64 from '@/app/lib/util/convertBase64';

import Placeholder from '@/public/profile-img/placeholderAvatar.png';
import uploadIcon from '@/public/profile-img/button_photo.png';
import Image, { ImageLoader } from 'next/image';
import Button from '@/app/ui/Button/Button';
import { parseError } from '@/app/lib/util/parseError';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

const imageLoader: ImageLoader = ({ src }) => {
  return `${conf.url}/${src}`;
};

const ProfileClientSide = () => {
  const { user, setUserData, setUpdateUser } = useUserContext();
  const fileUpload = useRef(null);

  const logOut = () => {
    deleteCookie('access_token');
    setUserData(null);
    redirect('/');
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files) {
        return;
      }
      const type = e.target.files[0].type.split('/')[1];
      const base64File = await convertBase64(e.target.files[0]);
      const base64String = base64File.toString().split(',');

      const newAvatar = await updateUserPhoto({
        type: type,
        avatar: base64String[1],
      });

      if (user) {
        setUpdateUser({ avatar: newAvatar });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(parseError(error));
      }
    }
  };

  return (
    <div className={style.profile__avatar}>
      {!user?.avatar ? (
        <Image src={Placeholder} alt='User Avatar' width={305} height={305} />
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
          src={uploadIcon}
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
  );
};

export default ProfileClientSide;
