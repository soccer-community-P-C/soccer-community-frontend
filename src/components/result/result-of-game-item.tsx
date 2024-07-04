import { IconShirtSport } from '@tabler/icons-react';
import Link from 'next/link';
import { shortISO } from '@/utils/date-helper';
import useResultOfGame from '@/hooks/useResultOfGame';

type ResultOfGameItemProps = {
  home: string;
  away: string;
  awayScore: string;
  homeScore: string;
  date: Date;
};

export default function ResultOfGameItem({
  home,
  away,
  awayScore,
  homeScore,
  date,
}: ResultOfGameItemProps) {
  const { setResultOfGame } = useResultOfGame();

  function handleClickLink() {
    setResultOfGame({
      homeScore,
      awayScore,
      homeTeamName: home,
      awayTeamName: away,
      date: shortISO(date),
    });
  }

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
      onClick={handleClickLink}
    >
      <p className="flex-[0.5_0.5_25%] text-right font-bold">{home}</p>
      <IconShirtSport stroke={2} />
      <div className="mx-8 min-w-16 text-center text-lg font-extrabold">{`${homeScore} - ${awayScore}`}</div>
      <IconShirtSport stroke={2} />
      <p className="flex-[0.5_0.5_25%] font-bold">{away}</p>
    </Link>
  );
}
