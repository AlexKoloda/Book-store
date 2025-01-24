
import Option from './Options/Options';
import style from './Select.module.scss';


type TSelectOption = {
  values: string[];
  className: string;
  placeholder: string;
};

const Select: React.FC<TSelectOption> = (props) => {
  return (
    // <>
    //   <select className={props.className}>
    //     {props.values.map((value) => {
    //       return <Option key={props.values.indexOf(value)} value={value} />;
    //     })}
    //   </select>
    // </>
    <div className={style.select__container}>
      <input className={style.select__input} type='text' readOnly={true} placeholder={props.placeholder}/>
    <div className={style.select__drop_down}>
      {props.values.map((value) => {
        return <Option key={props.values.indexOf(value)} value={value} className={style.select__options}/>})
      }
    </div>  
    </div>

  
  )
};

export default Select;
