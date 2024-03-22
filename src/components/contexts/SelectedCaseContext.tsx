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
  allCases: ElementType[];
  setAllCases: Dispatch<SetStateAction<ElementType[]>>;
  selectedCase: ElementType[];
  setSelectedCase: Dispatch<SetStateAction<ElementType[]>>;
}

export const SelectedCaseContext = createContext<SelectedCaseContextValue>({
  allCases: [],
  setAllCases: () => {},
  selectedCase: [],
  setSelectedCase: () => {},
});

export const SelectedCaseProvider = ({
  children,
}: SelectedCaseContextProps) => {
  const [selectedCase, setSelectedCase] = useState<ElementType[]>([]);
  const [allCases, setAllCases] = useState<ElementType[]>([]);

  const selectedCaseContextValue: SelectedCaseContextValue = {
    allCases,
    setAllCases,
    selectedCase,
    setSelectedCase,
  };

  return (
    <SelectedCaseContext.Provider value={selectedCaseContextValue}>
      {children}
    </SelectedCaseContext.Provider>
  );
};
