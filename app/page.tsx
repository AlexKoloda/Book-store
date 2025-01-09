import { Metadata } from 'next';
import Hero from './ui/hero/hero';
import Catalog from './ui/catalog/catalog';
import Banner from './ui/banner/banner';
import style from './page.module.scss'
// import { cookies } from 'next/headers';
// import { redirect } from 'next/dist/server/api-utils';


export const metadata: Metadata = {
  title: 'Home page', 
}

// const protectPage = async (path: string) => {
//   try {
//     const cookiesValues = await cookies();
//     const response = await fetch('/me', {
//       method: 'GET',
//       headers: {
        
//       }
//     });
//     const data = await response.json()
//     return data;
//   } catch(err) {
//     redirect(path)
//   }
// }

const Page = async () => {
  // await protectPage('/auth');
  return (
    <main className={style.main}>
    <Hero />
    <Catalog />
    <Banner />
    </main>
  )
}

export default Page;