import Button from '@/app/ui/Button/Button';
import BookImg from '@/public/cart-img/book-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import style from './page.module.scss';
import CartItem from '@/app/ui/CartItem/CartItem';
import { getBookInCartApi } from '@/api/serverApi/cartApi';
import { IBook } from '@/app/lib/definitions';

interface IBookCart {
  id: number;
  quantity: number;
  book: IBook;
}

const Cart = async () => {
  const response: IBookCart[] = await getBookInCartApi();

  const totalPrice = response
    .reduce((acc, item) => acc + item.book.price, 0)
    .toFixed(2);

  return !response ? (
    <section className={style.cart__section}>
      <Image src={BookImg} alt='Books' />
      <div className={style.cart__container}>
        <h1 className={style.cart__title}>Your cart is empty</h1>
        <p className={style.cart__description}>
          Add items to cart to make a purchase.Go to the catalogue no.
        </p>
        <Link href={'/#Catalog'}>
          <Button text='Go to catalog' />
        </Link>
      </div>
    </section>
  ) : (
    <section className={style.cart__section}>
      {
        <ul className={style.cart__list}>
          {response.map((cart) => {
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
      <Link href={'/'}>
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
