import style from './Footer.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import Map from '@/public/footer-img/map.png';
import Logo from '@/public/footer-img/footer-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__contacts}>
          <Link href='#'>
            <Image
              className={style.footer__logo}
              width={88}
              height={46}
              src={Logo}
              alt='Book store logo'
            />
          </Link>
          <div className={style.footer__links}>
          <a className={style.footer__link} href='mailto:tranthuy.nute@gmail.com'>tranthuy.nute@gmail.com</a>
          <a className={style.footer__link} href='tel:(480) 555-0103'>(480) 555-0103</a>
          </div>
        </div>

        <nav className={style.footer__navigation}>
          <ul className={style.footer__list}>
            <li className={style.footer__item}>
              <Link className={style.footer__link} href='/'>Home Page</Link>
            </li>
            <li className={style.footer__item}>
              <Link className={style.footer__link} href='#Catalog'>Catalog</Link>
            </li>
            <li className={style.footer__item}>
              <Link className={style.footer__link} href='/profile'>My Account</Link>
            </li>
            <li className={style.footer__item}>
              <Link className={style.footer__link} href='/cart'>Cart</Link>
            </li>
          </ul>
        </nav>

        <div className={style.footer__map}>
          <p className={style.footer__address}>
            {' '}
            6391 Elgin St. Celina, Delaware 10299
          </p>
          <Image width={413} height={160} src={Map} alt='Address map' className={style.footer__image} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
