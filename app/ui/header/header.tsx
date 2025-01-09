import Link from 'next/link';
import Image from 'next/image';
import style from './header.module.scss';
import Logo from '@/public/header-img/header-logo.png';
import Input from '../input/input';
import Button from '../button/button';

const Header: React.FC = () => {
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
      <form>
        <Input placeholder='Search' inputClass={style.header__input} />
      </form>
      <Link href='/auth/log-in'>
        <Button text='Log In/ Sign In' className={style.header__button} />
      </Link>
    </header>
  );
};

export default Header;
