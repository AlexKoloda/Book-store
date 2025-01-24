type TOptions = {
  value: string;
  className: string;
};

const Option: React.FC<TOptions> = (props) => {
  return (
    <>

    <p className={props.className}>{props.value}</p>

    </>
  )
    
};

export default Option;
