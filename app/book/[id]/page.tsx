import { getRecommendationBooks, getCurrentBookApi } from '@/api/serverApi/getBook';
import { NextPage } from 'next';
import { IBook } from '@/app/lib/definitions';
import Banner from '@/app/ui/Banner/Banner';
import ProductInfo from '@/app/ui/ProductInfo/ProductInfo';
import Comment from '@/app/ui/Comment/Comment';
import style from './page.module.scss';
import BookCard from '@/app/ui/CatalogItem/BookCard';

const Book: NextPage<{ params: Promise<{ id: string }> }> = async (props) => {
  const queryParams = await props.params;
  const id = queryParams.id;
  const book: IBook = await getCurrentBookApi(id);


  const genreId = book.bookGenres[0];
  const recommendationBooks:IBook[] =  await getRecommendationBooks(genreId.id)

  const comments = [
    {
      id: 1,
      commentAuthor: 'Lorem Ipsum',
      commentDate: 'Left a comment 0 day ago',
      commentText:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    },
    {
      id: 2,
      commentAuthor: 'Lorem Ipsum',
      commentDate: 'Left a comment 1 day ago',
      commentText: '  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    },
  ];
  return (
    <section className={style.book__section}>
      <ProductInfo
        id={book.id}
        bookPhoto={book.photo}
        bookDescription={book.description}
        bookTitle={book.title}
        bookPrice={book.price}
        authorName={book.author.name}
      />

      <h1 className={style.book__title}>Comments</h1>
      <ul className={style.book__list}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              userName={comment.commentAuthor}
              commentText={comment.commentText}
              commentDate={comment.commentDate}
            />
          );
        })}
      </ul>
      <ul className={style.catalog__list}>
          {recommendationBooks.map((book) => {
            return (
              <BookCard
                key={book.id}
                id = {book.id}
                photo={book.photo}
                bookPrice={book.price}
                bookTitle={book.title}
                bookAuthor={book.author.name}
                bookLeft = {book.numberBooksStock}
                isNew={book.isNew}
                isBestseller={book.isBestseller}
              />
            );
          })}
        </ul> 
      <Banner />
      <h1 className={style.book__title}>Recommendations</h1>
      {}
    </section>
  );
};

export default Book;
