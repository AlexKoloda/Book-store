import { getBooks } from '@/api/serverApi/getBook';
import BookCard from '../catalogItem/BookCard';
import style from './Catalog.module.scss';
import Select from './select/Select';

// interface Pagination {
//   totalPages: number; // 14
//   currentPage: number; // 1
//   prevPage: number | null; // null
//   hasNextPage: boolean; // true
//   hasPrevPage: boolean; // false
//   itemsPerPage: number; // 12
// }


const Catalog: React.FC = async () => {
  const listGenreValues = [
    'Fiction',
    'Non-fiction',
    'Light-fiction',
    'Science-fiction',
    'Fantasy',
    'Business & Finance',
    'Politics',
    'Travel books',
    'Autobiography',
    'History',
    'Thriller/ Mystery',
    'Romance',
    'Satire',
    'Horror',
    'Health / Medicine',
    'Children`s books',
    'Encyclopedia',
  ];
  const listPriceValues = ['0-100', '100 - 1000', '1000-5000'];
  const listSortValues = [
    'Price',
    'Name',
    'Author Name',
    'Rating',
    'Date of issue',
  ];

  const books = await getBooks();

  return (
    <section className={style.catalog}>
      <div className={style.catalog__filter}>
        <h1 className={style.catalog__title}>Catalog</h1>

        <div id='Catalog' className={style.catalog__filters}>
          <Select values={listGenreValues} className={style.catalog__select} />
          <Select values={listPriceValues} className={style.catalog__select} />
          <Select values={listSortValues} className={style.catalog__sort} />
        </div>
      </div>
      <div className={style.catalog__container}>
        <ul className={style.catalog__list}>
          {books.map((book) => {
            return (
              <BookCard
                key={book.id}
                photo={book.photo}
                bookPrice={book.price}
                bookTitle={book.title}
                bookAuthor={book.author}
                isNew={book.isNew}
                isBestseller={book.isBestseller}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
