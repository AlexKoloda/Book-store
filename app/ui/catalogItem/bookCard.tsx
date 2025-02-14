'use client';
import Image from 'next/image';
import style from './BookCard.module.scss';
import BookImage from '@/public/placeholder.png';
import Button from '../Button/Button';
import conf from '@/config';
import clsx from 'clsx';
import { useState } from 'react';
import { addBookApi } from '@/api/clientApi/cartApi';
import { useRouter } from 'next/navigation';
import RatingAverage from '../Rating/RatingAverage';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

type TBookCard = {
  key: number | string;
  id: number;
  photo: string;
  bookTitle: string;
  bookAuthor: string;
  bookPrice: number;
  bookLeft: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isAdded?: boolean;
  rating:
    | [
        {
          id: number;
          value: number;
        }
      ]
    | [];
};

// TODO  Сделать отдельный компонент для этикеток, который будет использовать пропсы и рисовать нужную торговую этикетку

const BookCard: React.FC<TBookCard> = (props) => {
  let averageRating = 0;
  const ratingValues = props.rating.map((item) => item.value);

  if (ratingValues.length) {
    const sumRatingValues = ratingValues.reduce((acc, value) => acc + value);
    averageRating = sumRatingValues / props.rating.length;
  }

  const router = useRouter();
  const isBookAvailable = props.bookLeft !== 0;
  const [isAdded, setIsAdded] = useState(false);

  const handleClickCartButton = async () => {
    if (!isAdded) {
      addBookApi(Number(props.id));
      setIsAdded(true);
    } else router.push(`/cart`);
  };

  const handleClickOnBook = () => {
    router.push(`/book/${props.id}`);
  };

  const imageLoader = () => {
    return `${conf.url}${props.photo}`;
  };

  return (
    <li className={style.book_card__item}>
      <FavoriteButton bookId={props.id} isAdded={props.isAdded}/>
      <div className={style.book_card__wrapper} onClick={handleClickOnBook}>
        <Image
          loader={imageLoader}
          src={BookImage}
          alt={props.bookTitle}
          width={305}
          height={448}
          className={style.book_card__photo}
        />
        <div className={style.book_card__description}></div>
      </div>
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
      <RatingAverage rating={averageRating.toFixed(1)} />
      {isBookAvailable ? (
        <Button
          text={!isAdded ? `$ ${props.bookPrice} USD` : `Added to cart`}
          className={
            isAdded ? style.book_card__button_added : style.book_card__button
          }
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
