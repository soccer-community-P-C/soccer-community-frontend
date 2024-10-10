import React from 'react';
import Echart from '@/components/common/echarts/echart';
import { TTeamRankInfo } from '@/types/leagues';
import { generateRankGraph } from '@/utils/rank-graph-generate';
import { useGetTeamList } from '@/api/league';
import { useLeagueInfo } from '@/hooks/useLeagueName';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import useWindowSize from '@/hooks/use-window-size';

type RankGraphProps = {
  teamRankData: TTeamRankInfo;
};

export default function RankGraph({ teamRankData }: RankGraphProps) {
  const { leagueId } = useLeagueInfo({ season: '2024' });
  const { isPending, data: teamList, error } = useGetTeamList({ years: '2024', leagueId });
  const { width } = useWindowSize();
  console.log(width);
  const chartCss: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  };

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>error</div>;
  }

  const option = generateRankGraph(teamRankData, teamList, width as number);

  return <Echart chartCss={chartCss} chartOption={option} />;
}
