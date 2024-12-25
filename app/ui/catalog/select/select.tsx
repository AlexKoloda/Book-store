import Option from './options/options';
type TSelectOption = {
  values: string[];
  className: string;
}

const Select: React.FC<TSelectOption> = (props) => {
  return(
      <>
        <select className={props.className}> 
      { props.values.map( ( value ) => {
        return (
        <Option key = {props.values.indexOf(value)} value = {value}/>
      ) 
    })}
    </select>
    </>
  )
}

export default Select;