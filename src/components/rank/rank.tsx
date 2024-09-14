'use client';

import RankHeader from '@/components/rank/rank-header';
import RankTable from '@/components/rank/rank-table';
import { useGetTeamRankList } from '@/api/league';
import { LoadingBox } from '@/components/common/loading-spinner';
import useLeagueName from '@/hooks/useLeagueName';
import { leagueIdMapper } from '@/utils/league-mapper';
import useLeagueSeason from '@/hooks/use-league-season';

export default function Rank() {
  // Todo: 현재 2023 팀랭크만 구현되어 2023으로 임시 설정
  const { season, setSeason } = useLeagueSeason();
  const fullSeason = '20' + season;
  // const fullSeason = 2023;
  const leagueId = leagueIdMapper[useLeagueName() as keyof typeof leagueIdMapper];
  const { isPending, data, error } = useGetTeamRankList({
    season: fullSeason.toString(),
    leagueId,
  });

  function handleSelectSeason(year: number) {
    setSeason((prevState) => prevState + year);
  }

  return (
    <>
      <RankHeader onSelectSeason={handleSelectSeason} season={season} />
      {isPending ? <LoadingBox /> : null}
      {error ? <div>데이터가져오기 실패</div> : null}
      {data && data.rankInfo.length > 0 && data.rankInfo[data.rankInfo.length - 1].ranks ? (
        <RankTable ranks={data.rankInfo[data.rankInfo.length - 1].ranks} />
      ) : null}
    </>
  );
}
