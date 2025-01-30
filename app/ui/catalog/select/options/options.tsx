import Image from 'next/image';
import style from './Options.module.scss'
import Checkbox from '@/public/icons/Checkbox.png'

type TOptions = {
  value: string;
  classNameItem?: string;
  classNameCheckBox?: string;
  isSort?: boolean;
  onClick: () => void;
  isActive: boolean;
};

const Option: React.FC<TOptions> = (props) => { 


  return !props.isSort ? (
    <div className={style.option__item} onClick={props.onClick}>
    <div className={props.isActive ? style.option__radio_active : style.option__radio}>
    <Image src={Checkbox} alt='Checkbox icon' className={style.option__icon}/>
    </div>
    <p className={props.classNameItem}>{props.value}</p>
    </div>
  ) : (
    <div className={style.option__item} onClick={props.onClick}>
    <p className={props.classNameItem}>{props.value}</p>
    </div>
  )    
};

export default Option;
