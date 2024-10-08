type CardItemProps = { className?: string; color: string };

export default function CardIcon({ className = 'h-[11px] w-[8px]', color }: CardItemProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      height="9"
      viewBox="0 0 8 11"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill={color === 'YELLOW' ? '#FFC601' : '#d91b1b'}
        height="10.5"
        rx="1"
        stroke={color === 'YELLOW' ? '#FFA801' : '#ba1414'}
        strokeWidth="0.5"
        width="7.5"
        x="0.25"
        y="0.25"
      />
    </svg>
  );
}
