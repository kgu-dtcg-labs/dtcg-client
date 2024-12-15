import clsx from 'clsx';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ id, label, className, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-start dark:text-white">
        {label}
      </label>
      <input
        id={id}
        className={clsx('p-2 border rounded outline-none ', className)}
        {...props}
      />
    </div>
  );
};

export default Input;
