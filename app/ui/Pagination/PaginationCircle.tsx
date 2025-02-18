import React from 'react';
import style from './Pagination.module.scss';

import Link from 'next/link';
import PaginationNumber from './PaginationNumber';

type Props = {
  allPages: (number | string)[];
  currentPage: number;
  createPageURL: (arg0: number) => void;
};

const PaginationCircle: React.FC<Props> = (props) => {
  return (
    <div className={style.pagination__pages}>
      {props.allPages.map((page, index) => {
        let position: 'first' | 'last' | 'single' | 'middle' | undefined;

        if (index === 0) position = 'first';
        if (index === props.allPages.length - 1) position = 'last';
        if (props.allPages.length === 1) position = 'single';
        if (page === '...') position = 'middle';

        return (
          <Link key={page} href={String(props.createPageURL(Number(page)))}>
          <PaginationNumber
            key={page}
            href={String(props.createPageURL(Number(page)))}
            page={page}
            position={position}
            isActive={props.currentPage === page}
            />
            </Link>
        );
      })}
    </div>
  );
};

export default PaginationCircle;
