import { IBook } from '@/app/lib/definitions';
import React from 'react';
import style from './Recommendations.module.scss';

import BookCard from '../CatalogItem/BookCard';
import EmptyContent from '../EmptyContent/EmptyContent';

type Props = {
  books: IBook[];
};

const Recommendations: React.FC<Props> = (props) => {
  const hasBooks = Boolean(props.books.length);

  if (!hasBooks) {
    return <EmptyContent />;
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
