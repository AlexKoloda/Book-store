import React from 'react';
import style from './Rating.module.scss'
import Image from 'next/image';
import StarIcon from '@/public/icons/StarIcon.png'
import StarIconEmpty from '@/public/icons/StarIconEmpty.png'

type Props = {
  value: number,
}

const RatingAverage:React.FC<Props> = (props) => {
 
 const stars: number [] = []
 
  for(let i=1; i<= props.value; i++) {
    stars.push(i);
  }
  if ( stars.length < 5) {
    stars.push(0);
  }

  console.log(stars)

  

return (
  <div className={style.average_rating__container}>
  <ul className={style.average_rating__list}>
    { stars.map((item) => {
      return item? (
        <li key={stars.indexOf(item)}>
          <Image src={StarIcon} alt='Star icon'/>
        </li>
      ) : (
        <li key={stars.indexOf(item)}>
          <Image src={StarIconEmpty} alt='Star icon empty'/>
        </li>
      )
    })

    }

  </ul>
  <p className={style.average_rating__count}>
  {props.value}.0
  </p>
  </div>
);
};

export default RatingAverage;
