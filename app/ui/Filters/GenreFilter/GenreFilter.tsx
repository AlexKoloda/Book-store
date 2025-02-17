'use client';
import style from './GenreFilter.module.scss';
import queryString from 'query-string';
import { IGenre } from '@/app/lib/definitions';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';
import CustomSelect, { SelectOption } from '@/app/ui/CustomSelect/CustomSelect';
import ArrowFilter from '@/public/icons/Select.png';

type GenreFilterPropsType = {
  genre: IGenre[];
  summary: string;
  type: string;
};

type ValueType = string;

const GenreFilter: React.FC<GenreFilterPropsType> = (props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const genreParams = searchParams.get('genre')?.split(',') || [];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<SelectOption<ValueType>[]>(
    []
  );

  const params = {
    page: searchParams.get('page'),
    sort: searchParams.get('sort'),
    price: searchParams.get('price'),
    genre: searchParams.get('genre'),
  };

  const selectOptions = useMemo((): SelectOption<ValueType>[] => {
    return props.genre.map((item): SelectOption<ValueType> => {
      return {
        label: item.name,
        value: item.name,
        id: item.id.toString(),
      };
    });
  }, [props]);

  const selectedIds = useMemo(() => {
    return selectedItems.map((i) => i.id);
  }, [selectedItems]);

  const handleSelectChange = (item: SelectOption<ValueType>) => {
    let itemsToSet: SelectOption<ValueType>[] = [];
    if (selectedItems.some((i) => i.id === item.id)) {
      itemsToSet = selectedItems.filter((elem) => item.id !== elem.id);
    } else {
      itemsToSet = [...selectedItems, item];
    }

    setSelectedItems(itemsToSet);
    
    const queryParamsToNavigate = queryString.stringify(
      {
        ...params,
        [props.type]: itemsToSet.map((i) => i.id),
      },
      { arrayFormat: 'comma', skipNull: true }
    );

    router.push(`/?${queryParamsToNavigate}#Catalog`);
  };


  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
  };


  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick} display='flex'>
      <div className={style.genre__container} onClick={handleToggleDropdown}>
        <div className={style.genre__box}>
          <input
            className={style.genre__label}
            type='text'
            readOnly={true}
            placeholder={'Genre'}
          />
          <Image
            src={ArrowFilter}
            alt='Arrow icon'
            className={
              isDropdownOpen
                ? style.genre__arrow_active
                : style.genre__arrow_disable
            }
          />
        </div>
        <CustomSelect
          className={
            isDropdownOpen ? 'select__dropdown_open' : 'select__dropdown_close'
          }
          selectedItems={selectedIds}
          activeItems={genreParams}
          options={selectOptions}
          onChange={handleSelectChange}
        />
      </div>
    </OutsideClickHandler>
  );
};

export default GenreFilter;
