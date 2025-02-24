'use client';
import style from './Pagination.module.scss';
import { generatePagination } from '@/app/lib/util/pagination';
import { usePathname, useSearchParams } from 'next/navigation';

import Link from 'next/link';
import PaginationArrow from './PaginationArrow';
import PaginationCircle from './PaginationCircle';

interface IPagination {
  totalPages: number; // 14
  currentPage?: number; // 1
  hasNextPage: boolean; // true
  hasPrevPage: boolean; // false
  itemsPerPage?: number; // 12
}

const PaginationControlled = (props: IPagination) => {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const allPages = generatePagination(currentPage, props.totalPages);

  console.log(props)

  // TODO Переписать на query.string 
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}#Catalog`;
  };

  if ( !props.totalPages ) {
    return null;
  }

  return (
    <div className={style.pagination__section}>
      <div className={style.pagination__container}>
        <Link href={createPageURL(props.hasPrevPage? currentPage - 1 : currentPage)} className={style.pagination__link}>
         <PaginationArrow isAvailable={props.hasPrevPage} style={style.pagination__arrow_prev}/>
        </Link>     
          <PaginationCircle
          allPages={allPages}
          currentPage={currentPage}
          createPageURL={createPageURL}
           />
        <Link href={createPageURL(props.hasNextPage? currentPage + 1 : currentPage)} className={style.pagination__link}>
        <PaginationArrow isAvailable={props.hasNextPage} style={style.pagination__arrow_next}/>
        </Link>
      </div>
      </div>
  )
};

export default PaginationControlled;
