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
          {TABLE_HEADER.map((item, index) => (
            <td key={index} className="py-4 min-w-32">
              {item.name}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {result.length === 0 ? (
          <tr>
            <td className="px-4 py-2 text-left">데이터 없음</td>
          </tr>
        ) : (
          // TODO: 페이지네이션 구현
          result.slice(0, 100).map((arr, index) => (
            <tr key={index}>
              {arr.map((item, index) => (
                <td
                  key={index}
                  className="px-4 py-1 text-center bg-white border dark:bg-transparent"
                >
                  {item.name}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

ResultTable.Wrapper = ({ children }: PropsWithChildren) => (
  <div className="mt-6 overflow-auto border rounded bg-gray-50 dark:bg-zinc-600">
    {children}
  </div>
);
export default ResultTable;
