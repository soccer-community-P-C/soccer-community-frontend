import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;
export default function Button({ children, ...otherProps }: ButtonProps) {
  return (
    <button
      className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
}
