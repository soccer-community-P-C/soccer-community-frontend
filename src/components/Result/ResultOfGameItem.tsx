import { IconShirtSport } from '@tabler/icons-react';

type ResultOfGameItemProps = {
  home: string;
  away: string;
  score: string;
};

export default function ResultOfGameItem({ home, away, score }: ResultOfGameItemProps) {
  return (
    <div className="flex h-14 w-full items-center justify-center gap-6">
      <p className="flex-[0.5_0.5_25%] text-right font-bold">{home}</p>
      <IconShirtSport stroke={2} />
      <div className="mx-8 min-w-16 text-center text-lg font-extrabold">{score}</div>
      <IconShirtSport stroke={2} />
      <p className="flex-[0.5_0.5_25%] font-bold">{away}</p>
    </div>
  );
}
