import { IGenre } from '@/app/lib/definitions';
import Select from '../select/Select';
import style from './Filters.module.scss';

type FiltersProps = {
  genres: IGenre[];
};

const Filters = (props: FiltersProps) => {
  const sortList = [
    { id: 1, name: 'Name' },
    { id: 2, name: 'Price' },
    { id: 3, name: 'Author' },
    { id: 4, name: 'Data of issue' },
  ];

  return (
    <div id='Catalog' className={style.filters__container}>
      <Select
        type={'genre'}
        options={props.genres}
        placeholder={'Genre'}
        classNameInput={style.filters__input}
      />
      <Select
        type={"price"}
        options={[{ id: 99, name: '1' }]}
        placeholder={'20'}
        isSlider={true}
        classNameInput={style.filters__input}
      />
      <Select
        type={'sort'}
        options={sortList}
        isSort
        classNameInput={style.filters__input_white}
      />
    </div>
  );
};

export default Filters;
