import { IBook } from '@/app/lib/definitions';
import React from 'react';
import style from './Recommendations.module.scss';

import AstroBoy from '@/public/icons/AstroBoy.jpeg';
import Image from 'next/image';
import BookCard from '../CatalogItem/BookCard';

type Props = {
  books: IBook[];
};

const Recommendations: React.FC<Props> = (props) => {
  const hasBooks = Boolean(props.books.length);

  if (!hasBooks) {
    return (
      <h1 className={style.recommendations__title}>
        {' '}
        ...Nothing alike yet, but our scouts are in another galaxy!
        <Image src={AstroBoy} alt='Astro boy' width={80} height={80} />
      </h1>
    );
  }

  return (
    <ul className={style.recommendations__list}>
      {props.books.map((book) => {
        return (
          <BookCard
            key={book.id}
            id={book.id}
            photo={book.photo}
            bookPrice={book.price}
            bookTitle={book.title}
            bookAuthor={book.author.name}
            bookLeft={book.numberBooksStock}
            isNew={book.isNew}
            isBestseller={book.isBestseller}
            rating={book.rating}
          />
        );
      })}
    </ul>
  );
};

export default Recommendations;
