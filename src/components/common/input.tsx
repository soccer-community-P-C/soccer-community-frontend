import { twMerge } from 'tailwind-merge';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
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
      {...props}
    />
  );
}
