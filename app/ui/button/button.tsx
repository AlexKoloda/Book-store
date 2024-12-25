import style from './button.module.scss'
import clsx from 'clsx'

type TButton = {
  type?: string,
  text: string,
  className: string,
}

const Button: React.FC <TButton> = (props) => {

  return (
    <button
    className = { clsx (
    style.button, 
     props.className
    )} 
    >
      
      {props.text}
    </button>
  )
}

export default Button;