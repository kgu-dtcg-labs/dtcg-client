import clsx from 'clsx';
import { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <p className="text-start dark:text-white">{label}</p>
        <input
          ref={ref}
          className={clsx('p-2 border rounded outline-none ', className)}
          {...props}
        />
      </div>
    );
  },
);

export default Input;
