
type TOptions = {
  value: string;
}



const Option: React.FC<TOptions> = (props) => {

  return (
    <option value={props.value}>{props.value}</option>
  )

}

export default Option;