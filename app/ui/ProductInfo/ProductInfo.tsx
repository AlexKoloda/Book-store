'use client';
import style from './ProductInfo.module.scss';
import React from 'react';
import { useRouter } from 'next/navigation';
import { addBookApi } from '@/api/clientApi/cartApi';
import conf from '@/config';

import Image from 'next/image';
import placeholder from '@/public/placeholder.png';
import GreyArrow from '@/public/icons/BackArrowGrey.png';
import Button from '@/app/ui/Button/Button';
import BasicRating from '@/app/ui/Rating/Rating';

type Props = {
  id: string | number;
  bookPhoto: string;
  bookTitle: string;
  bookDescription: string;
  authorName: string;
  bookPrice: string;
  rating: number;
};

const ProductInfo: React.FC<Props> = (props) => {
  const router = useRouter();
  const [isAdded, setIsAdded] = React.useState(false);

  const handleClickCartButton = async () => {
    if (!isAdded) {
      addBookApi(Number(props.id));
      setIsAdded(true);
    } else router.push(`/cart`);
  };

  const imageLoader = () => {
    return `${conf.url}${props.bookPhoto}`;
  };

  return (
    <div className={style.product__container}>
      <Image
        loader={imageLoader}
        src={placeholder}
        alt={`${props.bookTitle} cover'`}
        width={522}
        height={779}
        className={style.product__photo}
      />
      <div className={style.product__content}>
        <h1 className={style.product__title}>{props.bookTitle}</h1>
        <p className={style.product__description_title}>{props.authorName}</p>
        <div className={style.product__rating}>
          <BasicRating bookId={Number(props.id)} rating={props.rating} />
          <Image src={GreyArrow} alt={'arrow'} />
          <p className={style.product__rate_description}>Rate this book</p>
        </div>
        <h2 className={style.product__description_title}>Description</h2>
        <pre className={style.product__description}>
          {props.bookDescription}
        </pre>
        <p className={style.product__cover}> Hardcover</p>
        <Button
          text={!isAdded ? `$ ${props.bookPrice} USD` : `Added to cart`}
          className={
            isAdded ? style.product__button_added : style.product__button
          }
          onClick={handleClickCartButton}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
