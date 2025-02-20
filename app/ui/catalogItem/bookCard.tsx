'use client';

import style from './BookCard.module.scss';
import { useState } from 'react';
import { addBookApi } from '@/api/clientApi/cartApi';
import { useRouter } from 'next/navigation';

import Button from '../Button/Button';
import RatingAverage from '../Rating/RatingAverage';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import BookCover from '../BookCover/BookCover';
import CatalogLabel from '../CatalogLabel/CatalogLabel';
import { useUserContext } from '@/app/lib/contexts/UserContext';
import { toast } from 'react-toastify';
import { parseError } from '@/app/lib/util/parseError';
import { AxiosError } from 'axios';

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
  isInCart?: boolean;
  rating:
    | [
        {
          id: number;
          value: number;
        }
      ]
    | [];
};

const BookCard: React.FC<TBookCard> = (props) => {
  let averageRating = 0;
  const router = useRouter();
  const { setUpdateUser } = useUserContext();
  const ratingValues = props.rating.map((item) => item.value);
  const [isAdded, setIsAdded] = useState(props.isInCart);

  if (ratingValues.length) {
    const sumRatingValues = ratingValues.reduce((acc, value) => acc + value);
    averageRating = sumRatingValues / props.rating.length;
  }

  const handleClickCartButton = async () => {
    try {
      if (!isAdded) {
        const updateCart = await addBookApi(props.id)  
        console.log(updateCart)
        setUpdateUser({cart: updateCart})     
        setIsAdded(true);
        toast.success('Book added in cart');
      } else router.push(`/cart`);
      
    } catch (error) {
          if (error instanceof AxiosError) {
            toast.error(parseError(error));
          }
    }
  };


  return (
    <li className={style.book_card__item}>
      <FavoriteButton bookId={props.id} isAdded={props.isAdded} />
      <BookCover
        id={props.id}
        bookTitle={props.bookTitle}
        photo={props.photo}
        width={305}
        height={448}
      />
      <CatalogLabel isNew={props.isNew} isBestseller={props.isBestseller} />
      <h2 className={style.book_card__title}>{props.bookTitle}</h2>
      <p className={style.book_card__author}>{props.bookAuthor}</p>
      <RatingAverage rating={averageRating.toFixed(1)} />
      {props.bookLeft ? (
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
