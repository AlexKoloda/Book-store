import React from 'react';
import style from './Pagination.module.scss';

import Image from 'next/image';
import Arrow from '@/public/icons/Back.png';
import clsx from 'clsx';

type Props = {
  isAvailable: boolean;
  style: string;
};

const PaginationArrow: React.FC<Props> = (props) => {
 
  if (!props.isAvailable) {
    return (
      <Image
      src={Arrow}
      alt='Arrow'
      className={clsx(style.pagination__disable, props.style)}
    />
    );
  }

  return (
    <Image
      src={Arrow}
      alt='Arrow'
      className={clsx(style.pagination__arrow && props.style)}
    />
  );
};

export default PaginationArrow;
