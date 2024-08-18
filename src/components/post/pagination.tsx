import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useWindowSize from '@/hooks/use-window-size';
import { isMoblieSize } from '@/utils/window-size';

const WEB_PAGE_LIMIT = 5;
const MOBILE_PAGE_LIMIT = 3;

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({ totalPages }: PaginationProps) {
  const { width } = useWindowSize();
  const [pageSize, setPageSize] = useState(WEB_PAGE_LIMIT);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page') ?? '1';

  let currentPage = Math.min(Number(pageParam), totalPages);
  currentPage = Math.max(1, currentPage);

  useEffect(() => {
    return setPageSize(isMoblieSize(width) ? MOBILE_PAGE_LIMIT : WEB_PAGE_LIMIT);
  }, [width]);

  const currentPageGroup = Math.floor((currentPage - 1) / pageSize);

  const totalPagesArray = Array(totalPages)
    .fill(null)
    .map((_, i) => i + 1);

  const pageGroups = [];

  for (let i = 0; i < totalPagesArray.length; i += pageSize) {
    const group = totalPagesArray.slice(i, i + pageSize);
    pageGroups.push(group);
  }

  return (
    <nav aria-label="페이지 네비게이션" className="mx-auto mt-4">
      <ul className="flex h-10 items-center -space-x-px text-base">
        <li>
          <Link
            className="ms-0 flex h-10 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 sm:px-4 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            href={`${pathname}?page=${Math.max(1, currentPage - 1)}`}
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="h-3 w-3 rtl:rotate-180"
              fill="none"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1 1 5l4 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </li>
        {pageGroups[currentPageGroup]?.map((index) =>
          index === currentPage ? (
            <li key={index}>
              <Link
                aria-current="page"
                className="z-10 flex h-10 items-center justify-center border border-blue-300 bg-blue-50 px-3 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 sm:px-4 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                href={`${pathname}?page=${index}`}
              >
                {index}
              </Link>
            </li>
          ) : (
            <li key={index}>
              <Link
                className="flex h-10 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 sm:px-4 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href={`${pathname}?page=${index}`}
              >
                {index}
              </Link>
            </li>
          ),
        )}
        <li>
          <Link
            className="flex h-10 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 sm:px-4 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            href={`${pathname}?page=${Math.min(currentPage + 1, totalPages)}`}
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="h-3 w-3 rtl:rotate-180"
              fill="none"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1 9 4-4-4-4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
