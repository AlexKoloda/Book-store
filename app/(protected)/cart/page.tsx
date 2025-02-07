import Button from '@/app/ui/Button/Button';
import BookImg from '@/public/cart-img/book-logo.png'
import Image from 'next/image';
import Link from 'next/link';
import style from './page.module.scss'
import CartItem from '@/app/ui/CartItem/CartItem';
import { IBook } from '@/app/lib/definitions';



const Cart = () => {

  const testBook = {
    id: 22,
    photo: '/book-img/book-cover-reset.jpg',
    title: 'Press Reset',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    dataIssue: '2019-01-12',
    price: 27.99,
    numberBooksStock: 2,
    isNew: false,
    isBestseller: true,
    author: { id: 22, name: 'Jason Schreier' }
  }


  const cart = null
  const booksInCart: IBook[] = [testBook,] 
  const totalPrice = 35;
return cart ? (
<section className={style.cart__section}>
  <Image src={BookImg} alt='Books' /> 
  <div className={style.cart__container}>
    <h1 className={style.cart__title}>Your cart is empty</h1>
    <p className={style.cart__description}>Add items to cart to make a purchase.Go to the catalogue no.</p>
    <Link href={'/#Catalog'}>
    <Button text='Go to catalog' />
    </Link>
  </div>
  </section>
) : (
  <section className={style.cart__section}>
    {<ul className={style.cart__list}>
          {booksInCart.map((book) => {
            return (
              <CartItem
                key={book.id}
                id = {book.id}
                photo={book.photo}
                bookPrice={book.price}
                bookTitle={book.title}
                bookAuthor={book.author.name}
                bookLeft = {book.numberBooksStock}
                totalPrice = {totalPrice}
              />
            );
          })}
        </ul>
}
  </section>
)
}

export default Cart;