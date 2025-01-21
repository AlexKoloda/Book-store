import clsx from 'clsx';
import style from './Input.module.scss'

const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => {
  return <input {...props} className={clsx(props.className, style.global__input)} />;
};

export default Input;
