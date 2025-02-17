import { Metadata } from 'next';
import { getBookInCartApi } from '@/api/serverApi/cartApi';
import { IBook } from '@/app/lib/definitions';
import style from './page.module.scss';

import Link from 'next/link';
import CartItem from '@/app/ui/CartItem/CartItem';
import Button from '@/app/ui/Button/Button';
import CartEmpty from '@/app/ui/CartEmpty/CartEmpty';

export const metadata: Metadata = {
  title: 'Book Room: Cart',
  description: 'Cart, built Fusion Interns',
};

interface IBookCart {
  id: number;
  quantity: number;
  book: IBook;
}

const Cart = async () => {
  const cartItems: IBookCart[] = await getBookInCartApi();

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.book.price, 0)
    .toFixed(2);

  if (!cartItems.length) {
    return <CartEmpty />;
  }

  return (
    <section className={style.cart__section}>
      {
        <ul className={style.cart__list}>
          {cartItems.map((cart) => {
            return (
              <CartItem
                key={cart.id}
                cartItemId={cart.id}
                photo={cart.book.photo}
                bookPrice={cart.book.price}
                bookTitle={cart.book.title}
                bookAuthor={cart.book.author.name}
                bookLeft={cart.book.numberBooksStock}
              />
            );
          })}
        </ul>
      }
      <div className={style.cart__container}>
        <h2 className={style.cart__total_title}>Total:</h2>
        <p className={style.cart__total_text}>{totalPrice}</p>
      </div>
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
