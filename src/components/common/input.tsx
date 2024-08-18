import React from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props }: InputProps,
  ref,
) {
  return (
    <input
      className={twMerge(
        `
        w-full rounded-md px-3 py-2
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-black focus-visible:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
       `,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
