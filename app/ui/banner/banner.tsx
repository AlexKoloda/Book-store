import Button from '../button/button';
import style from './banner.module.scss';
import BannerImage from '@/public/banner-img/banner-img.png';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <section className={style.banner}>
        <Image src={BannerImage} alt='Wizards Castle image' />
        <div className={style.banner__container}>
          <h1 className={style.banner__title}>Authorize now</h1>
          <p className={style.banner__description}>
            Authorize now and discover the fabulous world of books
          </p>
          <Button text='Log In/ Sing Up' className={style.banner__button} />
        </div>
        <div className={style.banner__overlay}></div>
    </section>
  );
};

export default Banner;
