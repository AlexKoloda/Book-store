'use client';
import style from './Menu.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import Cart from '@/public/header-img/button_cart.png';
import favorite from '@/public/header-img/button_save.png';
import profile from '@/public/header-img/button_user profile.png';
import { useUserContext } from '@/app/lib/contexts/UserContext';


const Menu: React.FC = () => {
  const { user } = useUserContext();
  
  if (!user) {
    return null;
  }

  const numberCartItems = user.cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className={style.menu__nav}>
      <div className={style.menu__wrapper}>
        <div className={style.menu__count}>{numberCartItems}</div>
        <Link className={style.menu__link} href='/cart'>
          <Image
            className={style.menu__icon_cart}
            src={Cart}
            alt='Profile icon'
          />
        </Link>
      </div>
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
