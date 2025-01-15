import Image from 'next/image';
import style from './BookCard.module.scss';
import BookImage from '@/public/placeholder.png';
import Button from '../Button/Button';

type TBookCard = {
  bookTitle: string;
  bookAuthor: string;
  bookCoast: string;
};

const BookCard: React.FC<TBookCard> = (props) => {
  return (
    <li>
      <Image src={BookImage} alt={props.bookTitle} width={305} height={448} />
      <h2 className={style.book_card__title}>{props.bookTitle}</h2>
      <p className={style.book_card__author}>{props.bookAuthor}</p>
      <Button text={props.bookCoast} className={style.book_card__button} />
    </li>
  );
};

export default BookCard;
