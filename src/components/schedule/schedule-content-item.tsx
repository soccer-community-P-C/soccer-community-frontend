import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { TGame } from '@/types/schedules';
import { shortISOTimeHourMinute } from '@/utils/date-helper';
import useAllUrls from '@/hooks/use-all-urls';

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
  venue,
  matchDay,
  isHome = false,
}: ScheduleContentItemProps) {
  const { URL_MATCH } = useAllUrls();

  // Todo: 스코어가 null일때 게임이 종료되는 경우가 있어 api 수정이 필요, homeScore: null and leagueGameStatus: "END";;

  return (
    <Link
      className={twMerge(
        'flex h-10 w-full cursor-pointer items-center px-2 transition-colors hover:bg-hover sm:gap-2 md:h-14 md:gap-6 md:px-8',
        isHome && 'h-10',
      )}
      href={{
        pathname: `${URL_MATCH}/${leagueGameId}`,
      }}
    >
      <div className="flex w-[240px] flex-[0.5_0.5_15%] items-center justify-start text-xs sm:flex-[0.5_0.5_25%]">
        <div className="w-[40px] font-semibold sm:w-[60px]">{shortISOTimeHourMinute(date)}</div>
        <div className="md-block w-[100px] truncate">{venue}</div>
      </div>
      <div className="flex-all-center flex-[0.5_0.5_50%] truncate sm:flex-[0.5_0.5_50%] md:gap-4">
        <p className="sm-block flex-[0.5_0.5_25%] truncate text-right font-bold">{homeTeamName}</p>
        <Image alt="홈로고" className="h-[24px] w-[24px]" height={24} src={homeLogo} width={24} />
        <div className="flex min-w-16 flex-col text-center font-extrabold sm:mx-2 md:text-lg xl:mx-8">
          {leagueGameStatus === 'END' && homeScore && awayScore
            ? `${homeScore} - ${awayScore}`
            : '경기전'}
        </div>

        <Image alt="원정로고" className="h-[24px] w-[24px]" height={24} src={awayLogo} width={24} />
        <p className="sm-block flex-[0.5_0.5_25%] truncate text-left font-bold">{awayTeamName}</p>
      </div>
      <div className="flex w-[240px] flex-[0.5_0.5_15%] items-center justify-end text-xs sm:flex-[0.5_0.5_25%]">
        <div className="md-block w-[60px] font-semibold">{matchDay}R</div>
        {leagueGameStatus === 'END' ? <div className="truncate">경기 종료</div> : undefined}
      </div>
    </Link>
  );
}
