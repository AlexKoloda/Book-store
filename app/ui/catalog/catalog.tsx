import BookCard from '../CatalogItem/BookCard';
import Filters from '../Filters/Filters';
import style from './Catalog.module.scss';
import { IBook, IGenre } from '@/app/lib/definitions';

type CatalogPropsType = {
  books: IBook[];
  genres: IGenre[];
};

const Catalog: React.FC<CatalogPropsType> = (props) => {

  return (
    <section className={style.catalog__section}>
      <div className={style.catalog__filter}>
        <h1 className={style.catalog__title}>Catalog</h1>
        <Filters genres={props.genres} />
      </div>
      <div className={style.catalog__container}>

      {props.books.length? (
        <ul className={style.catalog__list}>
          {props.books.map((book) => {
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
      ) : (
        <div className={style.catalog__empty}>
        <h1 className={style.catalog__title}>Not found books for your request...</h1>
        </div>
      )}

      </div>
    </section>
  );
};

export default Catalog;
