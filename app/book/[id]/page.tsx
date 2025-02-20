import { Metadata, NextPage } from 'next';
import { getCurrentBookRatingApi } from '@/api/serverApi/ratingApi';
import { getRecommendationBooks, getCurrentBookApi } from '@/api/serverApi/getBook';
import { toast } from 'react-toastify';
import { parseError } from '@/app/lib/util/parseError';
import { AxiosError } from 'axios';
import style from './page.module.scss';

import ProductInfo from '@/app/ui/ProductInfo/ProductInfo';
import Banner from '@/app/ui/Banner/Banner';
import Recommendations from '@/app/ui/Recommendations/Recommendations';
import Comments from '@/app/ui/Comments/Comments';

export const metadata: Metadata = {
  title: 'Book Room: Product Page',
  description: 'Book description, built Fusion Interns',
};

const Book: NextPage<{ params: Promise<{ id: string }> }> = async (props) => {
  try {
    const queryParams = await props.params;
    const id = queryParams.id;
    const book = await getCurrentBookApi(id);
    const comments = book.comments;
    const bookId = book.id;
    const genreId = book.bookGenres[0].genre.id;
    const recommendationBooks = await getRecommendationBooks({
      genreId,
      bookId,
    });
    const personalBookRating: number = await getCurrentBookRatingApi(
      Number(id)
    );

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
        <Comments comments={comments} bookId={id} />
        <Banner />
        <h1 className={style.book__title}>Recommendations</h1>
        <Recommendations books={recommendationBooks} />
      </section>
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(parseError(error));
    }
  }
};

export default Book;
