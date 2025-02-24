import React from 'react';
import style from './CartEmpty.module.scss'

import Button from '../Button/Button';
import Image from 'next/image';
import BookImg from '@/public/cart-img/book-logo.png';
import Link from 'next/link';

const CartEmpty = () => {
return (
  <section className={style.cart__section_empty}>
  <Image src={BookImg} alt='Books' className={style.cart__photo}/>
  <div className={style.cart__container_empty}>
    <h1 className={style.cart__title}>Your cart is empty</h1>
    <p className={style.cart__description}>
      Add items to cart to make a purchase.Go to the catalogue no.
    </p>
    <Link href={'/#Catalog'}>
      <Button text='Go to catalog' className={style.cart__button_empty} />
    </Link>
  </div>
</section>
);
};

export default CartEmpty;
