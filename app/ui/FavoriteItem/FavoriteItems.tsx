'use client'
import React from 'react';
import style from './FavoriteItems.module.scss'
import { addBookApi } from '@/api/clientApi/cartApi';
import { useRouter } from 'next/navigation';

import Button from '../Button/Button';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import BookCover from '../BookCover/BookCover';

type FavoriteItemsProps = {
  key:number;
  bookId: number;
  bookCover: string; 
  bookTitle: string;  
  bookAuthor: string;  
  bookGenre: string; 
  bookPrice: number;
  bookDescription: string;  
  bookLeft: number; 
}

const FavoriteItem:React.FC<FavoriteItemsProps> = (props) => {
const [isAdded, setIsAdded] = React.useState(false);
const router = useRouter();

  const handleClickCartButton = async () => {    
      if (!isAdded) {
        addBookApi(Number(props.bookId));
        setIsAdded(true);
      } else router.push(`/cart`);
    };

return (
  <div className={style.favorite_item__container}>
   
   <BookCover
    id={props.bookId}
    bookTitle={props.bookTitle}
    photo={props.bookCover}
    width={197}
    height={289}
   />
    <div className={style.favorite_item__wrapper}>
    <FavoriteButton isAdded={true} bookId={props.bookId}/>
    </div>
    <div className={style.favorite_item__info}>
      <h1 className={style.favorite_item__title}>{props.bookTitle}</h1>
      <p className={style.favorite_item__author}>{props.bookAuthor}</p>
      <p className={style.favorite_item__genre}>{props.bookGenre}</p>
    <p className={style.favorite_item__text}>$ {props.bookPrice} USD</p>
    <Button
          text={!isAdded ? `Add to cart` : `Added to cart`}
          className={
            isAdded ? style.favorite_item__button_added : style.favorite_item__button
          }
          onClick={handleClickCartButton}
        />
    </div>

  </div>
);
};

export default FavoriteItem;
