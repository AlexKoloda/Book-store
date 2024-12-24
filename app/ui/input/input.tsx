type TInput = {
  placeholder: string;
  inputClass: string;
}


const Input: React.FC <TInput> = (props) => {
  return (
    <input 
    placeholder={props.placeholder}
    className={props.inputClass}
    ></input>
  )
}

export default Input;