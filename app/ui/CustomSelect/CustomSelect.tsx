import style from './CustomSelect.module.scss'
import Checkbox from '@/public/icons/Checkbox.png'
import Image from 'next/image';

export type SelectOption<T> = {
  value: T;
  label: string;
  id: string;
};

export type Props<T> = {
  options: SelectOption<T>[];
  onChange: (arg: SelectOption<T>) => void;
  selectedItems?: string[];
  className: string;
  isSort?: boolean;
  activeItems: string[] | string;
};

function CustomSelect<T>(props: Props<T>) {
  
  return (
    <ul className={style[props.className]}>
      {props.options.map((item) => {
        return (
          <li key={item.id} className={style.select__item}>
          { props.isSort? (null) : (
            <>
            <div className={props.activeItems.includes(item.id) ? style.select__radio_active : style.select__radio}></div>
            <Image src={Checkbox} alt='Checkbox icon' className={props.selectedItems?.includes(item.id)? style.select__icon_active : style.select__icon}/>  
            </>
          )}  
          <button className={style.select__button} onClick={() => props.onChange(item)}>
            {item.label}
          </button>
          </li>
        );
      })}
    </ul>
  );
}

export default CustomSelect;
