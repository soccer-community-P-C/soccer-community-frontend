import { LabelHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type LabelProps = {
  error: FieldError | undefined;
} & LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ className, error, htmlFor, children }: LabelProps) {
  return (
    <label
      className={twMerge(error ? 'font-medium text-red-600' : '', className)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
