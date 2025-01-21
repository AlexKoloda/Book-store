import style from './Button.module.scss';
import clsx from 'clsx';

type TButton = {
  type?: string;
  text: string;
  className: string;
  onClick?: () => void;
};

const Button: React.FC<TButton> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx(style.button, props.className)}
    >
      {props.text}
    </button>
  );
};

export default Button;
