type TInput = {
  name: string;
  type: string;
  placeholder: string;
  inputClass: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}


const Input: React.FC <TInput> = (props) => {
  return (
    <input 
    name={props.name}
    onChange={props.onChange}
    type={props.type}
    placeholder={props.placeholder}
    className={props.inputClass}
    ></input>
  )
}

export default Input;