import { Metadata, NextPage } from 'next';
import { getBooksApi } from '@/api/serverApi/getBook';

import style from './page.module.scss'
import PaginationControlled from './ui/Pagination/Pagination';
import BannerUp from './ui/BannerUp/BannerUp';
import Banner from './ui/Banner/Banner';
import Catalog from './ui/Catalog/Catalog';


export const metadata: Metadata = {
  title: 'Book Room: Home Page',
  description: 'Home page of book store, built Fusion Interns',
  icons: {
    icon: '/public/icons/TitleIcon.png'
  }
}


const Page: NextPage<{searchParams: Promise<{page: number, genre: string, sort: string, price: string, search: string}>}> = async (props) => { 
  const queryParams = await props.searchParams;
  
  const params = {
    page: queryParams.page || 1,
    genre: queryParams.genre,
    sort: queryParams.sort,
    price: queryParams.price,
    search: queryParams.search,
  };
  
  const response = await getBooksApi(params)  
  const genres = response.genres;
  const books = response.books[0];
  const totalPages = Math.ceil(response.books[1]/12);
  return (
    
    <main className={style.main}>
    <BannerUp />
    <Catalog genres={genres} books={books}/>
    <PaginationControlled 
      totalPages={totalPages}
      />
    <Banner />
    </main>
  )
}

export default Page;