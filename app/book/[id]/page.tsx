import { getRecommendationBooks, getCurrentBookApi } from '@/api/serverApi/getBook';
import { NextPage } from 'next';
import { IBook } from '@/app/lib/definitions';
import style from './page.module.scss';

import ProductInfo from '@/app/ui/ProductInfo/ProductInfo';
import Banner from '@/app/ui/Banner/Banner';
import Recommendations from '@/app/ui/Recommendations/Recommendations';
import Comments from '@/app/ui/Comments/Comments';
import { getCurrentBookRatingApi } from '@/api/serverApi/ratingApi';


const Book: NextPage<{ params: Promise<{ id: string }> }> = async (props) => {

  const queryParams = await props.params;
  const id = queryParams.id;
  const book: IBook = await getCurrentBookApi(id);
  const bookId = book.id;
  const genreId = book.bookGenres[0].genre.id;
  const recommendationBooks: IBook[] =  await getRecommendationBooks({genreId, bookId});
  const personalBookRating:number = await getCurrentBookRatingApi(Number(id));

  return (
    <section className={style.book__section}> 
      <ProductInfo
        id={book.id}
        bookPhoto={book.photo}
        bookDescription={book.description}
        bookTitle={book.title}
        bookPrice={book.price}
        authorName={book.author.name}
        rating = {personalBookRating}
      />
        <Comments />      
        <Banner />
      <h1 className={style.book__title}>Recommendations</h1>
      <Recommendations
        books={recommendationBooks}
      />
     
    </section>
  );
};

export default Book;
