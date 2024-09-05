import { TTeamRank } from '@/types/leagues';

type RankItemProps = {
  rankData: TTeamRank;
};

/*
 draw: 무승부
 points: 승점
 goalsAgainst: 실점
 goalsFor:득점
 */
export default function RankItem({ rankData }: RankItemProps) {
  const { rank, teamName, won, lost, draw, points, goalsAgainst, goalsFor } = rankData;
  const totalGameCount = won + lost + draw;
  const goalDifference = goalsFor - goalsAgainst;

  return (
    <tr className="bg-table-even h-8 border-b *:pl-2">
      <td>{rank}</td>
      <td className="truncate text-left font-semibold">{teamName}</td>
      <td>{totalGameCount}</td>
      <td className="font-semibold">{points}</td>
      <td>{won}</td>
      <td>{draw}</td>
      <td>{lost}</td>
      <td>{goalsFor}</td>
      <td>{goalsAgainst}</td>
      <td>{goalDifference}</td>
      {/*<td className="text-left">*/}
      {/*  <span className="pl-4">최근 전적</span>*/}
      {/*</td>*/}
    </tr>
  );
}
