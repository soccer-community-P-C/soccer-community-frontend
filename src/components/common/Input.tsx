type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...props }: InputProps) {
  return (
    <input
      className={`
        h-10 w-full rounded-md px-3 py-2
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-black focus-visible:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
       `}
      {...props}
    />
  );
}
