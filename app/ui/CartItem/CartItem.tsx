'use client';
import Image from 'next/image';
import style from './CartItem.module.scss';
import Delete from '@/public/icons/Delete.png';
import conf from '@/config';
import { useState } from 'react';
import { removeBookFromCartApi } from '@/api/clientApi/cartApi';

type cartItemPropsType = {
  key: number | string;
  cartItemId: number;
  photo: string;
  bookTitle: string;
  bookAuthor: string;
  bookPrice: number;
  bookLeft: number;
};

const CartItem = (props: cartItemPropsType) => {
  const [bookLeft, setBookLeft] = useState(props.bookLeft);

  const imageLoader = () => {
    return `${conf.url}${props.photo}`;
  };

  const handleClickCountMinus = () => {
    if (bookLeft > 0) {
      setBookLeft(bookLeft+1);
    }
    return;
  };

  const handleClickCountPlus = () => {
    if (bookLeft <= props.bookLeft) {
      setBookLeft(bookLeft-1);
      }

    return console.log('No more books in store');
  };

  const handleClickDelete = () => {
    removeBookFromCartApi({id: props.cartItemId});
  };

  return (
    <li className={style.cart_item__item}>
      <Image
        loader={imageLoader}
        src={props.photo}
        alt={props.bookTitle}
        width={197}
        height={289}
        className={style.cart_item__photo}
      />
      <div className={style.cart_item__container}>
        <h1 className={style.cart_item__book_title}>{props.bookTitle}</h1>
        <p className={style.cart_item__book_author}>{props.bookAuthor}</p>

        <div className={style.cart_item__wrapper}>
          <button
            className={style.cart_item__button}
            onClick={handleClickCountMinus}
          >
            -
          </button>
          <p className={style.cart_item__count}>{bookLeft}</p>
          <button
            className={style.cart_item__button}
            onClick={handleClickCountPlus}
          >
            +
          </button>
          <div className={style.trash__box} onClick={handleClickDelete}>
            <Image
              src={Delete}
              alt='Delete icon'
              className={style.trash__photo}
            />
            <button className={style.trash__button} content='trash' />
          </div>
        </div>
        <p className={style.cart_item__price}>$ {props.bookPrice} USD</p>
      </div>
    </li>
  );
};

export default CartItem;
