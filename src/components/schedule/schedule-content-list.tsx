import { forwardRef } from 'react';
import { TGameListWithDate } from '@/types/schedules';
import ScheduleContent from '@/components/schedule/schedule-content';

type ScheduleContentListProps = {
  monthlyGameList: TGameListWithDate[];
  isHome?: boolean; // 홈페이지에서 사용하는 컴포넌트인지?
};

const ScheduleContentList = forwardRef<HTMLDivElement, ScheduleContentListProps>(
  ({ monthlyGameList, isHome = false }, ref) => {
    return (
      <>
        {monthlyGameList.map(({ games: gameList, date }, index) => (
          <ScheduleContent date={date} gameList={gameList} isHome={isHome} key={index} ref={ref} />
        ))}
      </>
    );
  },
);

ScheduleContentList.displayName = 'ScheduleContentList';

export default ScheduleContentList;
