'use client';

import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

export default function Dropdown() {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        data-dropdown-toggle="dropdownDotsHorizontal"
        id="dropdownMenuIconHorizontalButton"
        onClick={() => setIsDropDown((prevState) => !prevState)}
        type="button"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 16 3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </svg>
      </button>

      <div
        aria-labelledby="dropdownMenuIconButton"
        className={twMerge(
          'absolute z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700',
          isDropDown && 'block',
        )}
        id="dropdownDots"
        role="menu"
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              프리미어리그
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              라리가
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
