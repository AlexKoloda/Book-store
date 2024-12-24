import Button from '../button/button';
import HeroImage from '@/public/hero-img/hero-img.png'
import style from './hero.module.scss'
import Image from 'next/image';

const Hero: React.FC = () => {

  return (
    <section className={style.hero}>
      <div className={style.hero__container}>

    <h1 className={style.hero__title}>
    Build your library with us
    </h1>
    <p className={style.hero__description}>
    Buy two books and get one for free     
    </p>
    <Button 
    text='Choose a book'
    className={style.hero__button}
    />
    <div className={style.hero__background}> </div>
    </div>

    <Image
    src={HeroImage}
    alt='Book store mascot'
    width={406}
    height={400}
    />

    </section>
  
  )

}

export default Hero;