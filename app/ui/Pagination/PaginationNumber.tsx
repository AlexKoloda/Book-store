import style from './Pagination.module.scss';

const PaginationNumber = ({
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) => {
  return isActive || position === 'middle' ? (
    <div className={style.pagination__page_active}>
      <div className={style.pagination__circle_active}></div>
    </div>
  ) : (
    <div className={style.pagination__page}>
      <div className={style.pagination__circle}></div>
    </div>
  );
};

export default PaginationNumber;
