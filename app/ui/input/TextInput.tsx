import clsx from 'clsx';
import style from './Input.module.scss'

const TextInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => {
  
  return <input {...props} className={clsx(props.className, style.global__input)} />;
};

export default TextInput;
