'use client';
import queryString from 'query-string';
import Arrow from '@/public/icons/Select.png';
import Option from './Options/Options';
import style from './Select.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import RangeSlider from './Slider/Slider';
import { IGenre } from '@/app/lib/definitions';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import OutsideClickHandler from 'react-outside-click-handler';

type TSelectOption = {
  type: string;
  isSlider?: boolean;
  isSort?: boolean;
  isOpen?: boolean;
  options: IGenre[];
  classNameInput?: string;
  placeholder?: string;
  onClick?: () => void;
};

const Select: React.FC<TSelectOption> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = {
    page: searchParams.get('page'),
    sort: searchParams.get('sort'),
    price: searchParams.get('price'),
    genre: searchParams.get('genre'),
  };

  const getCurrentSortName = () => {
    const sortName = props.options.find(
      (item) => item.id === Number(params.sort)
    );
    if (sortName) {
      return (sortName.name).toLocaleLowerCase();
    }
    return 'price';
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const isActiveGenre = (id: number) => {
    if (params.genre) {
      return Boolean(
        params.genre.split(',').find((item) => Number(item) === id)
      );
    }
    return false;
  };

  const handleOptionClick = (genre: string) => {
    const selectedOption: (string | null)[] = [];

    const possibleExistingGenreQuery = searchParams.get(props.type);

    if (possibleExistingGenreQuery) {
      const parsedData = queryString.parse(
        `${props.type}=${possibleExistingGenreQuery}`,
        {
          arrayFormat: 'comma',
        }
      );
      if (typeof parsedData.genre === 'string') {
        if (parsedData.genre === genre) {
          selectedOption.splice(0, 1);
        } else {
          selectedOption.push(parsedData.genre, genre);
        }
      }

      if (Array.isArray(parsedData.genre)) {
        const index = parsedData.genre.findIndex((item) => item === genre);

        if (index === -1) {
          selectedOption.push(...parsedData.genre, genre);
        } else {
          parsedData.genre.splice(index, 1);
          selectedOption.push(...parsedData.genre);
        }
      }
    } else {
      selectedOption.push(genre);
    }

    const queryParamsToNavigate = queryString.stringify(
      {
        ...params,
        [props.type]: selectedOption,
      },
      { arrayFormat: 'comma', skipNull: true }
    );

    router.push(`/?${queryParamsToNavigate}#Catalog`);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleClickOutside}>
      <div className={style.select__container} onClick={handleClick}>
        <div
          className={props.isSort ? style.select__box_white : style.select__box}
        >
          <input
            className={props.classNameInput}
            type='text'
            readOnly={true}
            placeholder={props.placeholder || `Sort by ${getCurrentSortName()}`}
          />
          <Image
            src={Arrow}
            alt='Arrow icon'
            className={
              isOpen ? style.select__arrow_active : style.select__arrow_disable
            }
          />
        </div>

        <div
          className={
            isOpen
              ? props.isSort
                ? style.select__drop_down_sort_active
                : style.select__drop_down_active
              : style.select__drop_down
          }
        >
          {props.options.map((value) => {
            return props.isSlider ? (
              <RangeSlider key={props.options.indexOf(value)} />
            ) : (
              <Option
                onClick={() => handleOptionClick(String(value.id))}
                key={value.id}
                value={value.name}
                classNameItem={style.select__item}
                isSort={props.isSort}
                isActive={isActiveGenre(value.id)}
              />
            );
          })}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Select;
