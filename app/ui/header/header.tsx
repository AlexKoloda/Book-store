'use client'
import Link from 'next/link';
import Image from 'next/image';
import style from './Header.module.scss';
import Logo from '@/public/header-img/header-logo.png';
import Button from '../Button/Button';
import Form from 'next/form';
import { useUserContext } from '@/app/lib/contexts/UserContext';
import Menu from '../Menu/Menu';
import Input from '../Input/Input';


const Header: React.FC = () => {
  const user = useUserContext();

  return (
    <header className={style.header}>
      <Link href='/'>
        <Image
          className={style.header__logo}
          width={88}
          height={46}
          src={Logo}
          alt='Book store logo'
        />
      </Link>
      <p className={style.header__catalog}>Catalog</p>
      <Form action='search'>
        <Input
          type='search'
          name='search'
          placeholder='Search'
          className={style.header__input}
        />
      </Form>
       { user.user ? (
        < Menu />
      ) : (
        <Link href='/auth/log-in'>
        <Button text='Log In/ Sing Up' className={style.header__button} />
      </Link>
      )}
    </header>
  );
};

export default Header;
