import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<'button'>;
export default function Button({ children, className = '', ...otherProps }: ButtonProps) {
  return (
    //focus:outline-none focus:ring-4 focus:ring-gray-100
    <button
      className={twMerge(
        `
        h-9 justify-center whitespace-nowrap rounded-md border border-gray-300 bg-white px-4 py-2
        text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100
        disabled:pointer-events-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800
      dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700
       `,
        className,
      )}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
}
