'use client';
import style from './Header.module.scss';
import { useState } from 'react';
import { useUserContext } from '@/app/lib/contexts/UserContext';
import { redirect, usePathname, useRouter } from 'next/navigation';
import queryString from 'query-string';

import Form from 'next/form';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '../Menu/Menu';
import Input from '../Input/TextInput';
import Button from '../Button/Button';
import SearchLogo from '@/public/icons/Search.png';
import Logo from '@/public/header-img/header-logo.png';

const Header: React.FC = () => {
  const {user} = useUserContext();
  const {replace} = useRouter();
  const logInPath = usePathname() === '/auth/log-in';
  const signUpPath = usePathname() === '/auth/sign-up';
  const [queryParams, setQueryParams] = useState('');

  const handleToggleLogInButton = () => {
    if (signUpPath) {
      redirect('/auth/log-in');
    }
    if (logInPath) {
      redirect('/auth/sign-up');
    }
    redirect('/auth/log-in');
  };

  const handleSearch = (value: string) => {
   setQueryParams(queryString.stringify(
      {
        value
      },
      { arrayFormat: 'comma', skipNull: true }
    ))  
  };

  const handleSubmitSearch = () => {
    replace(`/${queryParams}`)
  }

  return (
    <header className={style.header}>
      <Link href='/' className={style.header__link}>
        <Image
          className={style.header__logo}
          width={88}
          height={46}
          src={Logo}
          alt='Book store logo'
        />
      </Link>
      <p className={style.header__catalog}>Catalog</p>

      <label className={style.header__label}>
        <div className={style.header__search}>
          <Image
            src={SearchLogo}
            alt='Search logo'
            className={style.header__search_logo}
          />
          <Form action='/' onSubmit={handleSubmitSearch}>
            <Input
              type='search'
              name='search'
              placeholder='Search'
              className={style.header__input}
              onChange={(e) => handleSearch(e.target.value)}
              autoComplete='off'
            />
          </Form>
        </div>
      </label>
      {user ? (
        <Menu 
        />
      ) : (
        <Button
          text='Log In/ Sing Up'
          className={style.header__button}
          onClick={handleToggleLogInButton}
        />
      )}
    </header>
  );
};

export default Header;
