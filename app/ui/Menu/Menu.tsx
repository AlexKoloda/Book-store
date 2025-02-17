import style from './Menu.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import cart from '@/public/header-img/button-cart.svg';
import favorite from '@/public/header-img/button_save.png';
import profile from '@/public/header-img/button_user profile.png';

const Menu: React.FC = () => {
  return (
    <nav className={style.menu__nav}>
      <Link className={style.menu__link} href='/cart'>
        <Image className={style.menu__icon} src={cart} alt='Profile icon' />
      </Link>
      <Link className={style.menu__link} href='/favorite'>
        <Image className={style.menu__icon} src={favorite} alt='Profile icon' />
      </Link>
      <Link className={style.menu__link} href='/profile'>
        <Image className={style.menu__icon} src={profile} alt='Profile icon' />
      </Link>
    </nav>
  );
};

export default Menu;
