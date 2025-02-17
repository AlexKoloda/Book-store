'use client'
import React from 'react';
import style from './BookCover.module.scss'
import BookImage from '@/public/placeholder.png';

import Image from 'next/image';
import conf from '@/config';
import { useRouter } from 'next/navigation';

type Props = {
  id: number,
  bookTitle: string,
  photo: string,
  width: number,
  height: number;
}

const BookCover:React.FC<Props> = (props) => {
  const router = useRouter();

  const imageLoader = () => {
    return `${conf.url}${props.photo}?w=${props.width}`;
  };  
 
  const handleClickOnBook = () => {
    router.push(`/book/${props.id}`);
  };

return (
<div className={style.book_cover__wrapper} onClick={handleClickOnBook}>
        <Image
          loader={imageLoader}
          src={BookImage}
          alt={props.bookTitle}
          width={props.width}
          height={props.height}
          className={style.book_cover__photo}
        />
        <div className={style.book_cover__description}></div>
      </div>
);
};

export default BookCover;
