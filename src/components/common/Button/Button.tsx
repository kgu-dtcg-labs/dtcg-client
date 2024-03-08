import React, { forwardRef } from 'react';
import classNames from 'classnames';
import type { ButtonColorType } from './Button.type';
import { buttonColors } from './Button.style';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColorType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, color = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          'border rounded py-1.5 px-2 transition-colors ease-in-out',
          buttonColors[color],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
