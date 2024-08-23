'use client';

import RankHeader from '@/components/rank/rank-header';
import RankTable from '@/components/rank/rank-table';
import { useGetTeamRank } from '@/api/league';
import { LoadingBox } from '@/components/common/loading-spinner';
import useLeagueName from '@/hooks/useLeagueName';
import { leagueIdMapper } from '@/utils/league-mapper';

export default function Rank() {
  // Todo: 현재 2023 팀랭크만 구현되어 2023으로 임시 설정
  // const { season } = useLeagueSeason();
  // const fullSeason = '20' + season;
  const fullSeason = 2023;
  const leagueId = leagueIdMapper[useLeagueName() as keyof typeof leagueIdMapper];
  const { isPending, data, error } = useGetTeamRank({ season: fullSeason.toString(), leagueId });

  return (
    <>
      {/*<RankHeader season={season} />*/}
      <RankHeader season={23} />
      {isPending ? <LoadingBox /> : null}
      {error ? <div>데이터가져오기 실패</div> : null}
      {data ? <RankTable ranks={data} /> : <div>데이터가 없습니다.</div>}
    </>
  );
}
