import { Metadata } from 'next';
import Catalog from './ui/Catalog/Catalog';
import Banner from './ui/Banner/Banner';
import style from './page.module.scss'
import BannerUp from './ui/BannerUp/BannerUp';

export const metadata: Metadata = {
  title: 'Home page', 
}

const Page = async () => {

  return (
    <main className={style.main}>
    <BannerUp />
    <Catalog />
    <Banner />
    </main>
  )
}

export default Page;