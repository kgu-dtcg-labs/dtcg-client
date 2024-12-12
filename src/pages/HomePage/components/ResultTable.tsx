import type { ElementType } from '@type/element';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@components/Button';
import { useGetResultStore } from '@store/result';
import ExtractCasesModal from '@components/Modal/ExtractCasesModal';
import { TABLE_HEADER } from '@/data/element';

const LIMIT = 20;

const ResultTable = () => {
  const [page, setPage] = useState(0);
  const [selectedRow, setSelectedRow] = useState<ElementType[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const cases = useGetResultStore().cases;

  const currentPage = useMemo(
    () => cases.slice(page * LIMIT, page * LIMIT + LIMIT),
    [cases, page],
  );

  const handlePageChange = (step: 'back' | 'forward') => {
    switch (step) {
      case 'back':
        setPage((prev) => Math.max(prev - 1, 0));
        break;
      case 'forward':
        setPage((prev) => Math.min(prev + 1, Math.floor(cases.length / LIMIT)));
        break;
      default:
        break;
    }
  };

  const handleRowClick = (row: ElementType[]) => {
    setSelectedRow(row);
    setIsOpen(true);
  };

  useEffect(() => {
    setPage(0);
  }, [cases]);

  return (
    <div className="space-y-2">
      <p className="mr-1 text-lg font-semibold text-right">
        생성된 테스트 케이스: {cases.length}개
      </p>
      <div className="overflow-auto border rounded bg-gray-50 dark:bg-zinc-600">
        <table className="text-center table-fixed select-none">
          <thead>
            <tr className="font-medium border-b divide-x bg-slate-100 dark:bg-gray-500">
              {TABLE_HEADER.map((header) => {
                switch (header.type) {
                  case 'case':
                    return (
                      <th
                        key={`${header.name}-${header.id}`}
                        className="py-4 min-w-32 break-keep"
                      >
                        {header.name}
                      </th>
                    );
                  case 'layer':
                  case 'group':
                    return (
                      <th
                        key={`${header.value}-${header.id}`}
                        className="py-4 min-w-32 break-keep"
                      >
                        {header.value}
                      </th>
                    );
                  default:
                    break;
                }
              })}
            </tr>
          </thead>
          <tbody>
            {cases.length > 0 &&
              currentPage.map((row, index) => (
                <tr
                  key={`row-${index}`}
                  className="cursor-pointer hover:dark:bg-zinc-700 hover:bg-gray-100 break-keep"
                  onClick={() => handleRowClick(row)}
                >
                  {TABLE_HEADER.map((header) => {
                    const element = row.find((el) => el.parentId === header.id);

                    return (
                      <td
                        key={`${header.id}-${element?.value || 'none'}`}
                        className="px-4 py-1 border"
                      >
                        {element?.value || '없음'}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {cases.length > 0 && (
        <div className="flex items-center justify-center gap-2">
          <Button color="black" onClick={() => handlePageChange('back')}>
            이전
          </Button>
          <p className="w-20 font-semibold text-center">
            {page + 1}/{Math.ceil(cases.length / LIMIT)}
          </p>
          <Button color="black" onClick={() => handlePageChange('forward')}>
            다음
          </Button>
        </div>
      )}
      {isOpen && selectedRow && (
        <ExtractCasesModal
          onClose={() => setIsOpen(false)}
          cases={selectedRow}
        />
      )}
    </div>
  );
};

export default ResultTable;
