import { IGenre } from '@/app/lib/definitions';
import style from './Filters.module.scss';
import GenreFilter from './GenreFilter/GenreFilter';
import SortFilter from './SortFilter/SortFilter';
import PriceFilter from './PriceFilter/PriceFilter';

type FiltersProps = {
  genres: IGenre[];
};

const Filters = (props: FiltersProps) => {
  const sortList = [
    { id: 1, name: 'Price' },
    { id: 2, name: 'Name' },
    { id: 3, name: 'Author name' },
    { id: 4, name: 'Rating(coming soon)' },
    { id: 5, name: 'Date of issue' },
  ];

  return (
    <div id='Catalog' className={style.filters__container}>
      <GenreFilter type='genre' genre={props.genres} summary={'Genre'} />
      <PriceFilter />
      <SortFilter type='sort' sort={sortList} summary={'Sort by '} />
    </div>
  );
};

export default Filters;
