import placeholder from '@/public/placeholder.png';
import Image from 'next/image';
import style from './page.module.scss';
import BasicRating from '../ui/Rating/Rating';
import Button from '../ui/Button/Button';
import Banner from '../ui/Banner/Banner';

const Book = () => {
  const book = {
    bookTitle: 'Lorem Ipsum',
    bookAuthor: 'Lorem Ipsum',
    bookDescription:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    bookPrice: '$19.99 USD',
  };

  const comment = {
    commentAuthor: 'Lorem Ipsum',
    commentDate: 'Left a comment LOREM IPSUM day ago',
    commentText:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  };

  return (
    <section className={style.book__section}>
      <div className={style.book__container}>
        <Image
          src={placeholder}
          alt='Book cover'
          width={522}
          height={779}
          className={style.book__photo}
        />
        <div className={style.book__content}>
          <h1 className={style.book__title}>{book.bookTitle}</h1>
          <p className={style.book__description_title}>{book.bookAuthor}</p>
          <BasicRating />
          <h2 className={style.book__description_title}>Description</h2>
          <p className={style.book__description}>{book.bookDescription}</p>
          <p className={style.book__description}> Hardcover</p>
          <Button text={book.bookPrice} className={style.book__button} />
        </div>
      </div>

      <h1 className={style.book__title}>Comments</h1>

      {/* TODO Создать компонент для комментария и отрисовать их перебором */}

      <div className={style.comment__box}>
        <Image
          src={placeholder}
          alt='User avatar'
          width={60}
          height={60}
          className={style.book__user_avatar}
        />
        <h2 className={style.book__comment_author}>{comment.commentAuthor}</h2>
        <p className={style.book__comment_date}>{comment.commentDate}</p>
        <p className={style.book__comment_text}>{comment.commentText}</p>
      </div>

      <div className={style.comment__box}>
        <Image
          src={placeholder}
          alt='User avatar'
          width={60}
          height={60}
          className={style.book__user_avatar}
        />
        <h2 className={style.book__comment_author}>{comment.commentAuthor}</h2>
        <p className={style.book__comment_date}>{comment.commentDate}</p>
        <p className={style.book__comment_text}>{comment.commentText}</p>
      </div>

      <Banner />
    </section>
  );
};

export default Book;
