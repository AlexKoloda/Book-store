'use client';
import style from './Banner.module.scss';
import { useUserContext } from '@/app/lib/contexts/UserContext';

import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';
import BannerImage from '@/public/banner-img/banner-img.png';

const Banner: React.FC = () => {
  const { user } = useUserContext();

  if (user) {
    return null;
  }

  return (
    <section className={style.banner}>
      <Image src={BannerImage} alt='Wizards Castle image' />
      <div className={style.banner__container}>
        <h1 className={style.banner__title}>Authorize now</h1>
        <p className={style.banner__description}>
          Authorize now and discover the fabulous world of books
        </p>
        <Link href='/auth/log-in'>
          <Button text='Log In/ Sing Up' className={style.banner__button} />
        </Link>
      </div>
      <div className={style.banner__overlay}></div>
    </section>
  );
};

export default Banner;
