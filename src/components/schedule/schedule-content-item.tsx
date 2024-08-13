import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { TGame } from '@/types/schedules';
import { shortISOTimeHourMinute } from '@/utils/date-helper';
import useLeagueUrl from '@/hooks/use-league-url';

type ScheduleContentItemProps = TGame & {
  isHome?: boolean;
};

export default function ScheduleContentItem({
  awayScore,
  awayTeamName,
  date,
  homeScore,
  homeTeamName,
  homeLogo,
  awayLogo,
  leagueGameId,
  leagueGameStatus,
  isHome = false,
}: ScheduleContentItemProps) {
  const { URL_MATCH } = useLeagueUrl();

  return (
    <Link
      className={twMerge(
        'flex h-14 w-full cursor-pointer items-center gap-6 px-8 transition-colors hover:bg-gray-200',
        isHome && 'h-10',
      )}
      href={{
        pathname: `${URL_MATCH}/${leagueGameId}`,
      }}
    >
      <div className="i flex w-[240px] flex-[0.5_0.5_25%] items-center justify-start text-xs">
        <div className="w-[60px] font-semibold">{shortISOTimeHourMinute(date)}</div>
        <div className="truncate">스타디움</div>
      </div>
      <div className="flex-all-center flex-[0.5_0.5_50%] gap-4 truncate">
        <p className="flex-[0.5_0.5_25%] truncate text-right font-bold">{homeTeamName}</p>
        <Image alt="홈로고" className="h-[24px] w-[24px]" height={24} src={homeLogo} width={24} />
        {/*<IconShirtSport stroke={2} />*/}
        <div className="mx-2 flex min-w-16 flex-col text-center text-lg font-extrabold xl:mx-8">
          {`${homeScore} - ${awayScore}`}
        </div>
        {/*<IconShirtSport stroke={2} />*/}
        <Image alt="원정로고" className="h-[24px] w-[24px]" height={24} src={awayLogo} width={24} />
        <p className="flex-[0.5_0.5_25%] truncate text-left font-bold">{awayTeamName}</p>
      </div>
      <div className="flex w-[240px] flex-[0.5_0.5_25%] items-center justify-end text-xs">
        <div className="w-[60px] font-semibold">36R</div>
        {leagueGameStatus === 'END' ? <div className="truncate">경기 종료</div> : undefined}
      </div>
    </Link>
  );
}
