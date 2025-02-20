import { Metadata, NextPage } from 'next';
import { getBooksApi } from '@/api/serverApi/getBook';

import style from './page.module.scss'
import PaginationControlled from './ui/Pagination/Pagination';
import BannerUp from './ui/BannerUp/BannerUp';
import Banner from './ui/Banner/Banner';
import Catalog from './ui/Catalog/Catalog';
import { getBookFavoritesApi } from '@/api/serverApi/favoritesApi';
import { getBookInCartApi } from '@/api/serverApi/cartApi';

export const metadata: Metadata = {
  title: 'Book Room: Home Page',
  description: 'Home page of book store, built Fusion Interns',
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

  const data = await getBooksApi(params)  
  const genres = data.genres;
  const books = data.books; 
  const pagination = data.pagination;

  const favoritesBooksIds = (await getBookFavoritesApi()).map((item) => item.book.id);
  const addedInCartBookIds = (await getBookInCartApi()).map((item) => item.books.id);



  return (    
    <main className={style.main}>
    <BannerUp />
    <Catalog genres={genres} books={books} isAdded = {favoritesBooksIds} isInCart = {addedInCartBookIds}/>
    <PaginationControlled 
      totalPages={pagination.totalPage}
      hasNextPage={pagination.hasNextPage}
      hasPrevPage={pagination.hasPrevPage}
      />
    <Banner />
    </main>
  )
}

export default Page;