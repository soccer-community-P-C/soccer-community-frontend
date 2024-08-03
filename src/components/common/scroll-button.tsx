type ScrollButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
};

export default function ScrollButton({ direction, onClick }: ScrollButtonProps) {
  return (
    <button
      className="rounded-full bg-white bg-opacity-90 p-2 shadow-md hover:bg-opacity-100"
      onClick={onClick}
      type="button"
    >
      {direction === 'left' ? '<' : '>'}
    </button>
  );
}
