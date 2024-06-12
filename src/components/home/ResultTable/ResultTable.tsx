import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@components/common/Button/Button';
import { TABLE_HEADER } from '@constants/header';
import { ElementType } from '@type/element';
import type { Step } from '@type/common';

export interface ResultProps {
  result: ElementType[][];
}

const limit = 20;

const ResultTable = ({ result }: ResultProps) => {
  const [page, setPage] = useState(0);

  const currentPage = useMemo(
    () => result.slice(page * limit, page * limit + limit),
    [result, page],
  );

  const handlePageChange = useCallback(
    (step: Step) => {
      switch (step) {
        case 'back':
          setPage((prev) => Math.max(prev - 1, 0));
          break;
        case 'forward':
          setPage((prev) =>
            Math.min(prev + 1, Math.floor(result.length / limit)),
          );
          break;
        default:
          break;
      }
    },
    [result],
  );

  useEffect(() => {
    setPage(0);
  }, [result]);

  return (
    <div className="space-y-2">
      <p className="mr-1 text-lg font-semibold text-right">
        생성된 테스트 케이스: {result.length}개
      </p>
      <div className="overflow-auto border rounded bg-gray-50 dark:bg-zinc-600">
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
            {result.length > 0 &&
              currentPage.map((row, index) => (
                <tr
                  key={index}
                  className="hover:dark:bg-zinc-700 hover:bg-gray-100 break-keep"
                >
                  {TABLE_HEADER.map((header) => {
                    const element = row.find((el) => el.parentId === header.id);
                    return (
                      <td
                        key={`${header.id}-${element?.value || ''}`}
                        className="px-4 py-1 border"
                      >
                        {element?.value || ''}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {result.length > 0 && (
        <div className="flex items-center justify-center gap-2">
          <Button color="black" onClick={() => handlePageChange('back')}>
            이전
          </Button>
          <p className="w-20 font-semibold text-center">
            {page + 1}/{Math.ceil(result.length / limit)}
          </p>
          <Button color="black" onClick={() => handlePageChange('forward')}>
            다음
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResultTable;
