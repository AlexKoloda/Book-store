import Link from 'next/link';
import Image from 'next/image';
import style from './footer.module.scss'
import Logo from '@/public/footer-img/footer-logo.png'
import Map from '@/public/footer-img/map.png'



const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
    <div className={style.footer__container} >

     <div className={style.footer__contacts} >
    <Link href='#'>
    <Image
    className={style.footer__logo}
    width={88}
    height={46}
    src={Logo}
    alt='Book store logo'
    />
    </Link>
    <a href="mailto:tranthuy.nute@gmail.com">tranthuy.nute@gmail.com</a>
    <a href="tel:(480) 555-0103">(480) 555-0103</a>
    </div> 

    <nav className={style.footer__navigation}>
    <ul className={style.footer__list}>    
    <li className={style.footer__item}> 
    <Link href='/'>Home Page</Link>
    </li>
    <li className={style.footer__item}> 
    <Link href='#Catalog'>Catalog</Link>
    </li>
    <li className={style.footer__item}> 
    <Link href='/profile'>My Account</Link>
    </li>
    <li className={style.footer__item}>  
    <Link href='/cart'>Cart</Link>
    </li>
    </ul>   
    </nav> 

    <div className={style.footer__map}>
    <p className={style.footer__address}> 6391 Elgin St. Celina, Delaware 10299</p>  
    <Image
    width={413}
    height={160}
    src={Map}
    alt='Address map' 
    />
    </div>   
    
    </div>
    </footer>
  )
}

export default Footer;