import Link from 'next/link';
import style from './Pagination.module.scss';

const PaginationNumber = ({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) => {
  return isActive || position === 'middle' ? (
    <div className={style.pagination__page_active}>{page}</div>
  ) : (
    <Link href={href} className={style.pagination__page}>
      {page}
    </Link>
  );
};

export default PaginationNumber;
