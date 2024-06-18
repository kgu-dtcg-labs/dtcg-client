import classNames from 'classnames';
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onChange, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <p className="text-start">{label}</p>
        <input
          ref={ref}
          onChange={onChange}
          {...props}
          className={classNames(
            'p-2 border rounded outline-none dark:bg-zinc-800',
            className,
          )}
        />
      </div>
    );
  },
);

export default Input;
