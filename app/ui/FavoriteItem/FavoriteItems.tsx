'use client'
import React from 'react';
import style from './FavoriteItems.module.scss'
import Image, { ImageLoader } from 'next/image';
import conf from '@/config';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Button from '../Button/Button';
import { addBookApi } from '@/api/clientApi/cartApi';
import { useRouter } from 'next/navigation';

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

const imageLoader: ImageLoader = ({ src }) => {
  return `${conf.url}/${src}`;
};

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
   
    <Image src={props.bookCover} alt='book cover' width={220} height={309} loader={imageLoader} className={style.favorite_item__photo}/>
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
