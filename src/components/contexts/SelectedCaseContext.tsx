import {
  PropsWithChildren,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { ElementType } from '@type/element';

interface SelectedCaseContextProps extends PropsWithChildren {}

interface SelectedCaseContextValue {
  selectedCase: ElementType[];
  setSelectedCase: Dispatch<SetStateAction<ElementType[]>>;
}

export const SelectedCaseContext = createContext<SelectedCaseContextValue>({
  selectedCase: [],
  setSelectedCase: () => {},
});

export const SelectedCaseProvider = ({
  children,
}: SelectedCaseContextProps) => {
  const [selectedCase, setSelectedCase] = useState<ElementType[]>([]);

  const selectedCaseContextValue: SelectedCaseContextValue = {
    selectedCase,
    setSelectedCase,
  };

  return (
    <SelectedCaseContext.Provider value={selectedCaseContextValue}>
      {children}
    </SelectedCaseContext.Provider>
  );
};
