import { Metadata } from 'next';
import Footer from '../ui/footer/footer';
import style from './page.module.scss'
import Header from '../ui/header/header';
import Hero from '../ui/hero/hero';


export const metadata: Metadata = {
  title: 'Home page', 
}

const Page: React.FC = () => {
  return (
    <>
    <div className={style.wrapper__inner}>
    <Header />  
    <Hero />
    </div>
    <Footer/>
    </>
  )
}

export default Page;