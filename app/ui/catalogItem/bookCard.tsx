'use client';
import Image from 'next/image';
import style from './BookCard.module.scss';
import BookImage from '@/public/placeholder.png';
import Button from '../Button/Button';
import BasicRating from '../Rating/Rating';
import conf from '@/config';
import clsx from 'clsx';
import { useState } from 'react';

type TBookCard = {
  key: number;
  photo: string;
  bookTitle: string;
  bookAuthor: string;
  bookPrice: string;
  bookLeft: number;
  isNew?: boolean;
  isBestseller?: boolean;
};

// TODO  Сделать отдельный компонент для этикеток, который будет использовать пропсы и рисовать нужную торговую этикетку
const BookCard: React.FC<TBookCard> = (props) => {
  const isBookAvailable = props.bookLeft !== 0;
  const [isAdded, setIsAdded] = useState(false);

  const handleClickCartButton = () => {
    setIsAdded(!isAdded);
  };

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
      {props.isNew ? (
        <div className={clsx(style.book_card__label, style.label__new)}>
          <p className={clsx(style.book_card__text, style.label__new)}>New</p>
        </div>
      ) : null}

      {props.isBestseller ? (
        <div className={clsx(style.book_card__label, style.label__bestseller)}>
          <p className={clsx(style.book_card__text, style.label__bestseller)}>
            Bestseller
          </p>
        </div>
      ) : null}

      <h2 className={style.book_card__title}>{props.bookTitle}</h2>
      <p className={style.book_card__author}>{props.bookAuthor}</p>
      <BasicRating />

      {isBookAvailable ? (
        <Button
          text={!isAdded? `$ ${props.bookPrice} USD` : `Added to cart` }
          className={isAdded ? style.book_card__button_added : style.book_card__button}
          onClick={handleClickCartButton}
        />
      ) : (
        <div className={style.book_card__button_disable}>
          <p className={style.book_card__title_disable}>Not available</p>
        </div>
      )}
    </li>
  );
};

export default BookCard;
