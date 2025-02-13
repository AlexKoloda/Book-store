import { Metadata, NextPage } from 'next';
import { IBook, IComment } from '@/app/lib/definitions';
import { getCurrentBookRatingApi } from '@/api/serverApi/ratingApi';
import { getRecommendationBooks, getCurrentBookApi } from '@/api/serverApi/getBook';
import style from './page.module.scss';

import ProductInfo from '@/app/ui/ProductInfo/ProductInfo';
import Banner from '@/app/ui/Banner/Banner';
import Recommendations from '@/app/ui/Recommendations/Recommendations';
import Comments from '@/app/ui/Comments/Comments';

export const metadata: Metadata = {
  title: 'Book Room: Product Page',
  description: 'Book description, built Fusion Interns',
}

const Book: NextPage<{ params: Promise<{ id: string }> }> = async (props) => {
  const queryParams = await props.params;
  const id = queryParams.id;
  const book: IBook = await getCurrentBookApi(id);
  const comments: IComment[] = book.comments;


  const bookId = book.id;
  const genreId = book.bookGenres[0].genre.id;
  const recommendationBooks: IBook[] = await getRecommendationBooks({
    genreId,
    bookId,
  });
  const personalBookRating: number = await getCurrentBookRatingApi(Number(id));

  return (
    <section className={style.book__section}>
      <ProductInfo
        id={book.id}
        bookPhoto={book.photo}
        bookDescription={book.description}
        bookTitle={book.title}
        bookPrice={book.price}
        authorName={book.author.name}
        rating={personalBookRating}
      />
      <Comments 
      comments = { comments}
      bookId = {id}
      />
      <Banner />
      <h1 className={style.book__title}>Recommendations</h1>
      <Recommendations books={recommendationBooks} />
    </section>
  );
};

export default Book;
