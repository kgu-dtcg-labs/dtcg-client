import classNames from 'classnames';
import { elementColors } from './Element.style';
import type { ElementColorType } from './Element.type';

interface ElementProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: ElementColorType;
}

const Element = ({
  color = 'case',
  className,
  children,
  ...rest
}: ElementProps) => {
  return (
    <button
      className={classNames(
        'h-10 text-sm font-semibold rounded-lg w-36',
        elementColors[color],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Element;
