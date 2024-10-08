export default function ChangeIcon({
  className = 'w-[20px] h-[15px] mt-[4px]',
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      height="9"
      viewBox="0 0 10 9"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <path d="M9.621 5.5L7.5 7.621 5.379 5.5" stroke="#EA5A5A" />
        <path d="M8 1v6H7V1z" fill="#EA5A5A" />
        <path d="M4.621 3.5L2.5 1.379.379 3.5" stroke="#1ABF42" />
        <path d="M3 8V2H2v6z" fill="#1ABF42" />
      </g>
    </svg>
  );
}
