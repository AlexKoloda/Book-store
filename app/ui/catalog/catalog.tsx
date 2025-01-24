'use client'
import BookCard from '../catalogItem/BookCard';
import style from './Catalog.module.scss';
import Select from './select/Select';
import PaginationControlled from '../Pagination/Pagination';
import { getBooksApi } from '@/api/serverApi/getBook';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IBook } from '@/app/lib/definitions';

const Catalog: React.FC = () => {
  
  const [books, setBooks] = useState<IBook[] | null>(null);
  // const [currentPage, setCurrentPAge] = useState(1);
  const searchParams = useSearchParams(); 
  const search = searchParams.get('page');

  useEffect(() => {
    async function fetchData() {
      try {        
          const response = await getBooksApi(search || '1');
          setBooks(response);   
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[search]);
    

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

  return (
    <section className={style.catalog}>
      <div className={style.catalog__filter}>
        <h1 className={style.catalog__title}>Catalog</h1>

        <div id='Catalog' className={style.catalog__filters}>
          <Select values={listGenreValues} className={style.catalog__select} placeholder={"Genre"}/>
          <Select values={listPriceValues} className={style.catalog__select} placeholder={"20"}/>
          <Select values={listSortValues} className={style.catalog__sort} placeholder={"Price"}/>
        </div>
      </div>
      <div className={style.catalog__container}>

        <ul className={style.catalog__list}>
          {books?.map((book) => {
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
      <div className={style.catalog__pagination} >
      <PaginationControlled 
      totalPages={2}
      />
      </div>
    </section>
  );
};

export default Catalog;
