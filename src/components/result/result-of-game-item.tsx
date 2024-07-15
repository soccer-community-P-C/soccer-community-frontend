import { IconShirtSport } from '@tabler/icons-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import useResultOfGame from '@/hooks/useResultOfGame';
import { TLeagueGame } from '@/types/league-game-types';

type ResultOfGameItemProps = TLeagueGame & {
  isHome?: boolean;
};

export default function ResultOfGameItem({
  awayScore,
  awayTeamName,
  date,
  homeScore,
  homeTeamName,
  homeLogo,
  awayLogo,
  isHome = false,
}: ResultOfGameItemProps) {
  const { setResultOfGame } = useResultOfGame();

  function handleClickLink() {
    setResultOfGame({
      homeScore,
      awayScore,
      homeTeamName,
      awayTeamName,
      date: date,
      awayLogo,
      homeLogo,
    });
  }

  return (
    <Link
      className={twMerge(
        'flex h-14 w-full cursor-pointer items-center justify-center gap-6 px-4 transition-colors hover:bg-gray-200',
        isHome && 'h-10',
      )}
      href={{
        pathname: `/match/`,
        query: {
          date: date,
          team: `${homeTeamName}-${awayTeamName}`,
        },
      }}
      onClick={handleClickLink}
    >
      <p className="flex-[0.5_0.5_25%] truncate text-right font-bold">{homeTeamName}</p>
      <IconShirtSport stroke={2} />
      <div className="mx-2 min-w-16 text-center text-lg font-extrabold xl:mx-8">{`${homeScore} - ${awayScore}`}</div>
      <IconShirtSport stroke={2} />
      <p className="flex-[0.5_0.5_25%] truncate font-bold">{awayTeamName}</p>
    </Link>
  );
}
