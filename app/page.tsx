import { NextPage } from 'next';
import Catalog from './ui/Catalog/Catalog';
import Banner from './ui/Banner/Banner';
import style from './page.module.scss'
import BannerUp from './ui/BannerUp/BannerUp';
import { getBooksApi } from '@/api/serverApi/getBook';
import PaginationControlled from './ui/Pagination/Pagination';

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