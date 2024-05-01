import { TABLE_HEADER } from '@constants/header';
import { ElementType } from '@type/element';
import { PropsWithChildren } from 'react';

interface ResultProps {
  result: ElementType[][];
}

const ResultTable = ({ result }: ResultProps) => {
  return (
    <table className="text-center table-fixed select-none">
      <thead>
        <tr className="font-medium border-b divide-x bg-slate-100 dark:bg-gray-500">
          {TABLE_HEADER.map(({ name }, index) => (
            <th key={`${name}-${index}`} className="py-4 min-w-32">
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {result.length === 0 ? (
          <tr>
            <td colSpan={TABLE_HEADER.length} className="px-4 py-2 text-center">
              데이터 없음
            </td>
          </tr>
        ) : (
          result.slice(0, 1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {TABLE_HEADER.map((header) => {
                const element = row.find((el) => el.parentId === header.id);
                return (
                  <td
                    key={`${header.id}-${element ? element.name : 'X'}`}
                    className="px-4 py-1 text-center bg-white border dark:bg-transparent"
                  >
                    {element ? element.name : ''}
                  </td>
                );
              })}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

const ResultTableWrapper = ({ children }: PropsWithChildren) => (
  <div className="mt-6 overflow-auto border rounded bg-gray-50 dark:bg-zinc-600">
    {children}
  </div>
);
ResultTableWrapper.displayName = 'ResultTableWrapper';

ResultTable.Wrapper = ResultTableWrapper;

export default ResultTable;
