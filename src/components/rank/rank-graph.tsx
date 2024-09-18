import React from 'react';
import Echart from '@/components/common/echart';
import { TTeamRankInfo } from '@/types/leagues';
import { generateRankGraph } from '@/utils/rank-graph-generate';

type RankGraphProps = {
  teamRankData: TTeamRankInfo;
};

export default function RankGraph({ teamRankData }: RankGraphProps) {
  const chartCss: React.CSSProperties = {
    width: '100%',
    height: '400px',
  };

  const option = generateRankGraph(teamRankData);

  return <Echart chartCss={chartCss} chartOption={option} />;
}
