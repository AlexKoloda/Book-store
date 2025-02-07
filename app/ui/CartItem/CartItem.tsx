'use client';
import Image from 'next/image';
import style from './CartItem.module.scss';
import BookImage from '@/public/placeholder.png';
import conf from '@/config';
import { useState } from 'react';
import { deleteBookApi } from '@/api/clientApi/cartApi';

type cartItemPropsType = {
  key: number;
  id: number;
  photo: string;
  bookTitle: string;
  bookAuthor: string;
  bookPrice: string;
  bookLeft: number;
  totalPrice: number;
};

const CartItem = (props: cartItemPropsType) => {
  const [count, setCount] = useState(1)

  const imageLoader = () => {
    return `${conf.url}${props.photo}`;
  };

  const handleClickCountMinus = () => {
    setCount(count - 1)
  }

  const handleClickDelete = (id: number) => {
    setCount(0)
    deleteBookApi(id)
  }

  return (
    <>
      <Image
        loader={imageLoader}
        src={BookImage}
        alt={props.bookTitle}
        width={305}
        height={448}
        className={style.cart_item__photo}
      />
      <div className={style.cart_item__container}>
      <h1 className={style.cart_item__book_title}>{props.bookTitle}</h1>
      <p className={style.cart_item__book_author}>{props.bookAuthor}</p>
      <button  
      className={style.cart_item__button}
      content='-'
      onClick={handleClickCountMinus}
      />
      {count}
      <button  
      className={style.cart_item__button}
      content='-'
      onClick={handleClickCountMinus}
      />
      
      <button  
      className={style.cart_item__button}
      onClick={() => handleClickDelete(props.id)}
      content='trash'
      />
      <p className={style.cart_item__price}>$ {props.bookPrice} USD</p>
      </div>
      <h2 className={style.cart_item__total_title}>Total:</h2>
      <p className={style.cart_item__total_text}>{props.totalPrice}</p>
    </>
  );
};

export default CartItem;
