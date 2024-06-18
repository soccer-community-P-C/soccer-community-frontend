import { IconShirtSport } from '@tabler/icons-react';
import Link from 'next/link';
import { shortISO } from '@/utils/date-helper';

type ResultOfGameItemProps = {
  home: string;
  away: string;
  score: string;
  date: Date;
};

export default function ResultOfGameItem({ home, away, score, date }: ResultOfGameItemProps) {
  return (
    <Link
      className="flex h-14 w-full cursor-pointer items-center justify-center gap-6 transition-colors hover:bg-gray-200"
      href={{
        pathname: `/match/`,
        query: {
          date: shortISO(date),
          team: `${home}-${away}`,
        },
      }}
    >
      <p className="flex-[0.5_0.5_25%] text-right font-bold">{home}</p>
      <IconShirtSport stroke={2} />
      <div className="mx-8 min-w-16 text-center text-lg font-extrabold">{score}</div>
      <IconShirtSport stroke={2} />
      <p className="flex-[0.5_0.5_25%] font-bold">{away}</p>
    </Link>
  );
}
