type TButton = {
  type?: string,
  text: string,
  className: string,
}

const Button: React.FC <TButton> = (props) => {

  return (
    <button
    className={props.className}>
      {props.text}
    </button>
  )
}

export default Button;