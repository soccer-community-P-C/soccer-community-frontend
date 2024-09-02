import { twMerge } from 'tailwind-merge';
import BoxHeading from '@/components/common/box-heading';
import { getDateTitle } from '@/utils/date-helper';
import { TGame } from '@/types/schedules';
import ScheduleContentItem from '@/components/schedule/schedule-content-item';

type ScheduleContentProps = {
  gameList: TGame[];
  date: string;
  isHome: boolean;
};

export default function ScheduleContent({ gameList, date, isHome }: ScheduleContentProps) {
  return (
    <div className="divide-y divide-border-and-divide overflow-hidden rounded-md border border-border-and-divide">
      <BoxHeading
        className={twMerge(
          'flex h-[50px] items-center bg-[#f7f7f9] pl-4 dark:bg-[#f7f7f9]/10',
          isHome && 'h-[40px]',
        )}
        hTagType={isHome ? 'h4' : 'h3'}
      >
        {getDateTitle(new Date(date))}
      </BoxHeading>

      <div
        className={twMerge(
          'items-center divide-y divide-border-and-divide text-base sm:text-lg',
          isHome && 'text-base',
        )}
      >
        {gameList.length > 0 ? (
          gameList.map((game) => <ScheduleContentItem {...game} key={game.leagueGameId} />)
        ) : (
          <div className="p-2">
            <span>오늘은 경기가 없습니다.</span>
          </div>
        )}
      </div>
    </div>
  );
}
