import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { buttonColors } from './Button.style';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  color?: 'default' | 'blue' | 'black' | 'disabled' | 'red';
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, color = 'default', icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          'border rounded py-1.5 px-2 transition-colors text-nowrap',
          { 'flex items-center justify-center gap-1': icon },
          buttonColors[color],
          className,
        )}
        {...props}
      >
        {icon}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
