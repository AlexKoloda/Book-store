import Button from '@/app/ui/Button/Button';
import BookImg from '@/public/cart-img/book-logo.png'
import Image from 'next/image';
import Link from 'next/link';
import style from './page.module.scss'


const Cart = () => {

return (

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

)
}

export default Cart;