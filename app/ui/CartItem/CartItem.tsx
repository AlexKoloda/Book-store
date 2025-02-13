'use client';
import Image from 'next/image';
import style from './CartItem.module.scss';
import Delete from '@/public/icons/Delete.png';
import conf from '@/config';
import { useState } from 'react';
import { removeBookApi } from '@/api/clientApi/cartApi';

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
  const [count, setCount] = useState(1);

  const imageLoader = () => {
    return `${conf.url}${props.photo}`;
  };

  const handleClickCountMinus = () => {
    setCount(count - 1);
  };

  const handleClickCountPlus = () => {
    setCount(count + 1);

  };

  const handleClickDelete = (id: number) => {
    setCount(0);
    removeBookApi(id);
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
          >-</button>
          <p className={style.cart_item__count}>{count}</p>
          <button
            className={style.cart_item__button}
            onClick={handleClickCountPlus}
          >+</button>
          <div className={style.trash__box} onClick={() => handleClickDelete(props.cartItemId)}>
          <Image src={Delete} alt='Delete icon' className={style.trash__photo}/>  
          <button
            className={style.trash__button}            
            content='trash'
            />
          </div>
        </div>
        <p className={style.cart_item__price}>$ {props.bookPrice} USD</p>
      </div>
    </li>
  );
};

export default CartItem;
