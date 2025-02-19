import { Metadata } from 'next';
import { getBookInCartApi } from '@/api/serverApi/cartApi';
import { IBook } from '@/app/lib/definitions';
import style from './page.module.scss';

import Link from 'next/link';
import Button from '@/app/ui/Button/Button';
import CartEmpty from '@/app/ui/CartEmpty/CartEmpty';
import CartClientSide from '@/app/ui/CartClientSide/CartClientSide';

export const metadata: Metadata = {
  title: 'Book Room: Cart',
  description: 'Cart, built Fusion Interns',
};

export interface IBookCart {
  id: number;
  quantity: number;
  books: IBook;
}

const Cart = async () => {
  const cartItems: IBookCart[] = await getBookInCartApi();
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.books.price * item.quantity), 0)

  if (!cartItems.length) {
    return <CartEmpty />;
  }

  return (
    <section className={style.cart__section}>
      <CartClientSide cartItems={cartItems} totalPrice = {(totalPrice.toFixed(2))}/>
      <Link href='/'>
        <Button
          text={'Continue shopping'}
          className={style.cart__button_continue}
        />
      </Link>
      <Button text={'Checkout'} className={style.cart__button} />
    </section>
  );
};

export default Cart;
