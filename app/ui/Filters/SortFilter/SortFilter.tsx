'use client';
import CustomSelect, { SelectOption } from '@/app/ui/CustomSelect/CustomSelect';
import OutsideClickHandler from 'react-outside-click-handler';
import Image from 'next/image';
import ArrowFilter from '@/public/icons/Select.png';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import style from './SortFilter.module.scss';
import queryString from 'query-string';

type GenreFilterPropsType = {
  sort: ISort[];
  summary: string;
  type: string;
};

interface ISort {
  id: number;
  name: string;
}

type ValueType = string;

const SortFilter: React.FC<GenreFilterPropsType> = (props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortParams = searchParams.get('sort') || 'price';
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] =
    useState<SelectOption<ValueType>>();

    const params = {
      page: searchParams.get('page'),
      sort: searchParams.get('sort'),
      price: searchParams.get('price'),
      genre: searchParams.get('genre'),
    };

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
  };

  const selectOptions = useMemo((): SelectOption<ValueType>[] => {
    return props.sort.map((item): SelectOption<ValueType> => {
      return {
        label: item.name,
        value: item.name,
        id: item.id.toString(),
      };
    });
  }, [props]);

  const handleSelectChange = (item: SelectOption<ValueType>) => {
    const queryParamsToNavigate = queryString.stringify(
      {
        ...params,
        [props.type]: item.id,
      },
      { arrayFormat: 'comma', skipNull: true }
    );
    
    setSelectedItem(item);
    router.push(`/?${queryParamsToNavigate}#Catalog`);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick} display='flex'>
      <div className={style.sort__container} onClick={handleToggleDropdown}>
        <div className={style.sort__box}>
          <input
            className={style.sort__label}
            type='text'
            readOnly={true}
            placeholder={`Sort by ${selectedItem? (selectedItem.value.toLowerCase()) : 'price'}`}
          />
          <Image
            src={ArrowFilter}
            alt='Arrow icon'
            className={
              isDropdownOpen
                ? style.sort__arrow_active
                : style.sort__arrow_disable
            }
          />
        </div>
        <CustomSelect
          className={
            isDropdownOpen
              ? 'select__dropdown_sort_open'
              : 'select__dropdown_close'
          }
          activeItems={sortParams}
          options={selectOptions}
          onChange={handleSelectChange}
          isSort={true}
        />
      </div>
    </OutsideClickHandler>
  );
};

export default SortFilter;
