'use client';
import clsx from 'clsx';
import style from './CartItem.module.scss';
import { useState } from 'react';
import { addBookApi, removeBookFromCartApi, removeOneBook } from '@/api/clientApi/cartApi';

import Delete from '@/public/icons/Delete.png';
import Image from 'next/image';
import BookCover from '../BookCover/BookCover';

type cartItemPropsType = {
  id: number;
  key: number | string;
  cartItemId: number;
  photo: string;
  bookTitle: string;
  bookAuthor: string;
  bookPrice: number;
  bookLeft: number;
  totalPrice: number;
  quantity: number;
  onRemove: (bookId: number) => Promise<void>,
  onChangePrice: (arg0: number) => void,
};

const CartItem = (props: cartItemPropsType) => {
  const [count, setCount] = useState(props.quantity);
  const [bookLeft, setBookLeft] = useState(props.bookLeft - 1);
  const [isDisableMinusButton, setIsDisableMinusButton] = useState(false);
  const [isDisablePlusButton, setIsDisablePlusButton] = useState(false);

  const handleClickCountMinus = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      setBookLeft(bookLeft + 1);
      setIsDisablePlusButton(false);
      props.onChangePrice(props.totalPrice - props.bookPrice)
      removeOneBook(props.id)
    } else {
      setIsDisableMinusButton(true);
      return;
    }
  };

  const handleClickCountPlus = () => {
    if (bookLeft <= props.bookLeft && bookLeft > 0) {
      setCount((prev) => prev + 1);
      setBookLeft(bookLeft - 1);
      setIsDisableMinusButton(false);
      props.onChangePrice(props.totalPrice + props.bookPrice)
      addBookApi(props.id)
    } else {
      setIsDisablePlusButton(true);
      return;
    }
  };

  const handleClickDelete = () => {
    removeBookFromCartApi({ id: props.cartItemId });
    props.onRemove(props.id);
    props.onChangePrice(props.totalPrice - props.bookPrice)
  };

  if (count === 0 ) {
    removeBookFromCartApi({ id: props.cartItemId });
    props.onRemove(props.id);
    props.onChangePrice(props.totalPrice - props.bookPrice)
  }

  return (
    <li className={style.cart_item__item}>
      <BookCover
      id={props.id}
      bookTitle={props.bookTitle}
      photo={props.photo}
      width={197}
      height={287}
      />
      <div className={style.cart_item__container}>
        <h1 className={style.cart_item__book_title}>{props.bookTitle}</h1>
        <p className={style.cart_item__book_author}>{props.bookAuthor}</p>

        <div className={style.cart_item__wrapper}>
          <button
            className={clsx(
              isDisableMinusButton
                ? style.cart_item__button_disable
                : style.cart_item__button
            )}
            onClick={handleClickCountMinus}
          >
            -
          </button>
          <p className={style.cart_item__count}>{count}</p>
          <button
            className={clsx(
              isDisablePlusButton
                ? style.cart_item__button_disable
                : style.cart_item__button
            )}
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
