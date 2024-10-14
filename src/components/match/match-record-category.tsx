import MatchRecordCategoryItem from '@/components/match/match-record-category-item';
import { TGameStatistics } from '@/types/schedules';

type MatchRecordCategoryProps = {
  homeStatistics: TGameStatistics;
  awayStatistics: TGameStatistics;
};

export default function MatchRecordCategory({
  homeStatistics,
  awayStatistics,
}: MatchRecordCategoryProps) {
  return (
    <div>
      <ul className="flex flex-col items-center gap-2">
        <MatchRecordCategoryItem
          awayCount={awayStatistics.shots}
          homeCount={homeStatistics.shots}
          title="슈팅"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.shotsOnGoal}
          homeCount={homeStatistics.shotsOnGoal}
          title="유효슈팅"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.shotsOffGoal}
          homeCount={homeStatistics.shotsOffGoal}
          title="일반슈팅"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.offsides}
          homeCount={homeStatistics.offsides}
          title="오프사이드"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.fouls}
          homeCount={homeStatistics.fouls}
          title="파울"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.ballPossession}
          homeCount={homeStatistics.ballPossession}
          isShare={true}
          title="볼점유율"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.saves}
          homeCount={homeStatistics.saves}
          title="선방"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.yellowCards}
          homeCount={homeStatistics.yellowCards}
          title="옐로카드"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.redCards}
          homeCount={homeStatistics.redCards}
          title="레드카드"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.cornerKicks}
          homeCount={homeStatistics.cornerKicks}
          title="코너킥"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.freeKicks}
          homeCount={homeStatistics.freeKicks}
          title="프리킥"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.goalKicks}
          homeCount={homeStatistics.goalKicks}
          title="골킥"
        />
        <MatchRecordCategoryItem
          awayCount={awayStatistics.throwIns}
          homeCount={homeStatistics.throwIns}
          title="쓰로인"
        />
      </ul>
    </div>
  );
}
