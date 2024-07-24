import { IconShirtSport } from '@tabler/icons-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { TGame } from '@/types/league-games';
import useLeagueGameContent from '@/hooks/use-league-game-content';

type LeagueGameOfGameItemProps = TGame & {
  isHome?: boolean;
};

export default function LeagueGameContentItem({
  awayScore,
  awayTeamName,
  date,
  homeScore,
  homeTeamName,
  homeLogo,
  awayLogo,
  isHome = false,
}: LeagueGameOfGameItemProps) {
  const { setLeagueGameContent } = useLeagueGameContent();

  function handleClickLink() {
    setLeagueGameContent({
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
      <Image alt="홈로고" height={24} src={homeLogo} width={24} />
      {/*<IconShirtSport stroke={2} />*/}
      <div className="mx-2 min-w-16 text-center text-lg font-extrabold xl:mx-8">{`${homeScore} - ${awayScore}`}</div>
      {/*<IconShirtSport stroke={2} />*/}
      <Image alt="원정로고" height={24} src={awayLogo} width={24} />

      <p className="flex-[0.5_0.5_25%] truncate font-bold">{awayTeamName}</p>
    </Link>
  );
}
