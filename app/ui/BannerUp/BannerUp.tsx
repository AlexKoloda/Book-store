import Button from '../Button/Button';
import HeroImage from '@/public/hero-img/hero-img.png';
import style from './BannerUp.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const BannerUp: React.FC = () => {
  return (
    <section className={style.hero}>
      <div className={style.hero__container}>
        <h1 className={style.hero__title}>Build your library with us</h1>
        <p className={style.hero__description}>
          Buy two books and get one for free
        </p>
        <Link href="#Catalog">
        <Button text='Choose a book' className={style.hero__button} />
        </Link>
        <div className={style.hero__background}> </div>
      </div>

      <Image src={HeroImage} alt='Book store mascot' width={406} height={400} />
    </section>
  );
};

export default BannerUp;
