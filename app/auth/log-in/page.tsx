import Button from '@/app/ui/button/button';
import style from './page.module.scss'
import Input from '@/app/ui/input/input';
import Image from 'next/image';
import LogInImage from '@/public/log-in-img/log_in-image.png'

const Page:React.FC = () => {
  return (
    <section className={style.log_in__section}>
    <div >
    <h1 className={style.log_in__title}> Log in </h1>
    <form className={style.log_in__form}>
    <Input
    placeholder='Email' 
    inputClass={style.log_in__input}
    />
    <p className={style.log_in__description}>
    Enter your email
    </p>
    <Input
    placeholder='Password'
    inputClass={style.log_in__input}
    />
    <p className={style.log_in__description}>
    Enter your password
    </p>
    </form>
    <Button 
    text='Log In'
    className={style.log_in__button}
    /> 
    </div>  
    <Image 
    src = {LogInImage}
    alt = 'Men read'
    />
    </section>
  );
}

export default Page;
