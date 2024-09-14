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
  // Todo: 경기전이고 score가 null이면 점수 표시를 "경기전"으로 표시. 추 후 실시간 점수표시가 되면 수정해야함.

  return (
    <div className="divide-y divide-border-and-divide overflow-hidden rounded-md border border-border-and-divide">
      <BoxHeading
        className={twMerge('flex h-[50px] items-center bg-table-header pl-4', isHome && 'h-[40px]')}
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
          gameList.map((game) => (
            <ScheduleContentItem {...game} key={`key-${game.homeTeamName}-${game.awayTeamName}`} />
          ))
        ) : (
          <div className="p-2">
            <span>오늘은 경기가 없습니다.</span>
          </div>
        )}
      </div>
    </div>
  );
}
