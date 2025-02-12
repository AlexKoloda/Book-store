import React from 'react';
import style from './Rating.module.scss';
import Image from 'next/image';
import StarIcon from '@/public/icons/StarIcon.png';
import StarIconEmpty from '@/public/icons/StarIconEmpty.png';

const RatingAverage = (props: { rating: number }) => {
  const starsArray = Array.from({ length: 5 }, (_, index) =>
    index < props.rating ? 'filled' : 'empty'
  );

  return (
    <div className={style.rating__container}>
      <ul className={style.rating__list}>
        {starsArray.map((item, index) => {
          return item === 'filled' ? (
            <Image
              key={index}
              src={StarIcon}
              alt='Star icon'
              width={26}
              height={26}
            />
          ) : (
            <Image
              key={index}
              src={StarIconEmpty}
              alt='Star icon empty'
              width={26}
              height={26}
            />
          );
        })}
      </ul>
      <p className={style.rating__count}>{props.rating}.0</p>
    </div>
  );
};

export default RatingAverage;
