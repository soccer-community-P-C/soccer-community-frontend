import { TGameListWithDate } from '@/types/league-games';
import LeagueGameContent from '@/components/league-game/league-game-content';

type LeagueGameOfGameProps = {
  monthlyGameList: TGameListWithDate[];
  isHome?: boolean; // 홈페이지에서 사용하는 컴포넌트인지?
};

export default function LeagueGameContentList({
  monthlyGameList,
  isHome = false,
}: LeagueGameOfGameProps) {
  return (
    <>
      {monthlyGameList.map(({ games: gameList, date }, index) => (
        <LeagueGameContent date={date} gameList={gameList} isHome={isHome} key={index} />
      ))}
    </>
  );
}
