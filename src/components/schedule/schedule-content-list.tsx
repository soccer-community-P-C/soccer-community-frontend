import { TGameListWithDate } from '@/types/schedules';
import ScheduleContent from '@/components/schedule/schedule-content';

type ScheduleContentListProps = {
  monthlyGameList: TGameListWithDate[];
  isHome?: boolean; // 홈페이지에서 사용하는 컴포넌트인지?
};

export default function ScheduleContentList({
  monthlyGameList,
  isHome = false,
}: ScheduleContentListProps) {
  return (
    <>
      {monthlyGameList.map(({ games: gameList, date }, index) => (
        <ScheduleContent date={date} gameList={gameList} isHome={isHome} key={index} />
      ))}
    </>
  );
}
