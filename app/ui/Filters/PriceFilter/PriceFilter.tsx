'use client';
import style from './PriceFilter.module.scss';
import queryString from 'query-string';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Image from 'next/image';
import ArrowFilter from '@/public/icons/Select.png';
import RangeSlider from '../../Slider/RangeSlider';
import OutsideClickHandler from 'react-outside-click-handler';

const PriceFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialValue: [number, number] = [0, 100];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
  };

  const handleSliderChange = (value: [number, number]) => {

    const params = {
      page: searchParams.get('page'),
      sort: searchParams.get('sort'),
      price: searchParams.get('price'),
      genre: searchParams.get('genre'),
    };
    const queryParamsToNavigate = queryString.stringify(
      {
        ...params,
        price: value,
      },
      { arrayFormat: 'comma', skipNull: true }
    );

    router.push(`/?${queryParamsToNavigate}`);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick} display='flex'>
      <div className={style.price__container} onClick={handleToggleDropdown}>
        <div className={style.price__box}>
          <input
            className={style.price__label}
            type='text'
            readOnly={true}
            placeholder={'Price'}
          />
          <Image
            src={ArrowFilter}
            alt='Arrow icon'
            className={
              isDropdownOpen
                ? style.price__arrow_active
                : style.price__arrow_disable
            }
          />
        </div>
        <div
          className={
            isDropdownOpen
              ? style.price__dropdown_open
              : style.price__dropdown_close
          }
        >
          <RangeSlider
            initialValueRange={initialValue}
            onDebouncedChange={handleSliderChange}
          />
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default PriceFilter;
