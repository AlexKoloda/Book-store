'use client';
import React from 'react';
import style from './CartClientSide.module.scss';
import { IBookCart } from '@/app/(protected)/cart/page';

import CartItem from '../CartItem/CartItem';
import { useRouter } from 'next/navigation';

type Props = {
  cartItems: IBookCart[];
  totalPrice: string;
};

const CartClientSide: React.FC<Props> = (props) => {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = React.useState(Number(props.totalPrice))
  const [cartItems, setCartItems] = React.useState(props.cartItems);

  const handleRemove = async (bookId: number) => {
    try {
      setCartItems((prev) => prev.filter((item) => item.book.id !== bookId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePrice = (newPrice: number) => {
    setTotalPrice(newPrice);
  }

  if ( cartItems.length === 0) {    
    router.refresh() 
  }

  return (
    <>
      <ul className={style.cart__list}>
        {cartItems.map((cart) => {
          return (
            <CartItem
              id={cart.book.id}
              key={cart.id}
              cartItemId={cart.id}
              photo={cart.book.photo}
              bookPrice={cart.book.price}
              bookTitle={cart.book.title}
              bookAuthor={cart.book.author.name}
              bookLeft={cart.book.numberBooksStock}
              totalPrice = {totalPrice}
              onRemove={handleRemove}
              onChangePrice={handleChangePrice}
            />
          );
        })}
      </ul>
      <div className={style.cart__container}>
        <h2 className={style.cart__total_title}>Total:</h2>
        <p className={style.cart__total_text}>{totalPrice.toFixed(2)}</p>
      </div>
    </>
  );
};

export default CartClientSide;
