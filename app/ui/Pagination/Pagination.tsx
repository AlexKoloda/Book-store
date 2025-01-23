'use client';
import { generatePagination } from '@/app/lib/util/pagination';
import style from './Pagination.module.scss';
import ArrowLeft from '@/public/icons/Back.png';
import ArrowRight from '@/public/icons/Forward.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import PaginationNumber from './PaginationNumber';

interface IPagination {
  totalPages: number; // 14
  currentPage?: number; // 1
  prevPage?: number | null; // null
  hasNextPage?: boolean; // true
  hasPrevPage?: boolean; // false
  itemsPerPage?: number; // 12
}

const PaginationControlled = (props: IPagination) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const allPages = generatePagination(currentPage, props.totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}#Catalog`;
  };

  return (
    <div className={style.pagination__container}>
      <Link href={createPageURL(currentPage - 1)}>
        <Image src={ArrowLeft} alt='Arrow back' />
      </Link>
      <div className={style.pagination__pages}>
        {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })} 
        </div>
      <Link href={createPageURL(currentPage + 1)}>
        <Image src={ArrowRight} alt='Arrow forward' />
      </Link>
    </div>
  );
};

export default PaginationControlled;
