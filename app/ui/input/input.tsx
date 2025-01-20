import clsx from 'clsx';

const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => {
  return <input {...props} className={clsx('default', props.className)} />;
};

export default Input;
