'use client'
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import style from './PriceFilter.module.scss';
import Image from 'next/image';
import ArrowFilter from '@/public/icons/Select.png';
import RangeSlider from '../../../Slider/RangeSlider';


const PriceFilter = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(true);
  };

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
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
      <div className={isDropdownOpen? style.price__dropdown_open : style.price__dropdown_close}>
            <RangeSlider             
            />

      </div>
          
      </div>
    </OutsideClickHandler>
  );
};

export default PriceFilter;
