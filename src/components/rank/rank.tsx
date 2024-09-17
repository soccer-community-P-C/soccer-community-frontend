'use client';

import RankHeader from '@/components/rank/rank-header';
import RankTable from '@/components/rank/rank-table';
import { useGetTeamRankList } from '@/api/league';
import { LoadingBox } from '@/components/common/loading-spinner';
import useLeagueSeason from '@/hooks/use-league-season';
import { useLeagueInfo } from '@/hooks/useLeagueName';
import RankGraph from '@/components/rank/rank-graph';
import { rankInfo } from '@/components/rank/mock-data';

export default function Rank() {
  const { season, setSeason } = useLeagueSeason();
  const fullSeason = '20' + season;
  // const fullSeason = 2023;
  const { leagueId } = useLeagueInfo({ season: '2024' });
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
        <>
          <RankTable ranks={data.rankInfo[data.rankInfo.length - 1].ranks} />

          <RankGraph teamRankData={data} />
        </>
      ) : null}
      {/*<RankGraph teamRankData={rankInfo} />*/}
    </>
  );
}
