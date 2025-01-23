'use client';
import Image from 'next/image';
import style from './BookCard.module.scss';
import BookImage from '@/public/placeholder.png';
import Button from '../Button/Button';
import BasicRating from '../Rating/Rating';
import conf from '@/config';

type TBookCard = {
  key: number;
  photo: string;
  bookTitle: string;
  bookAuthor: string;
  bookPrice: string;
  isNew?: boolean;
  isBestseller?: boolean;
};

const BookCard: React.FC<TBookCard> = (props) => {
 
  const imageLoader = () => {
    return `${conf.url}${props.photo}`;
  };

    return (
    <li className={style.book_card__item}>
      <Image
        loader={imageLoader}
        src={BookImage}
        alt={props.bookTitle}
        width={305}
        height={448}
        className={style.book_card__photo}
      />
      <h2 className={style.book_card__title}>{props.bookTitle}</h2>
      <p className={style.book_card__author}>{props.bookAuthor}</p>
      <BasicRating/>
      <Button text={props.bookPrice} className={style.book_card__button} />
    </li>
  );
};

export default BookCard;
