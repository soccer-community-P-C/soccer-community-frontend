import RankItem from '@/components/rank/rank-item';
import TableContainer from '@/components/common/table/table-container';
import { TTeamRank } from '@/types/leagues';

type RankTableProps = {
  ranks: TTeamRank[];
};

export default function RankTable({ ranks }: RankTableProps) {
  if (ranks.length < 1) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <TableContainer>
      <table className="w-full table-fixed caption-bottom overflow-hidden">
        <colgroup>
          <col className="w-[50px]" />
          <col className="w-[100px] sm:w-[300px]" />
          <col className="w-[50px] sm:w-[70px]" />
          <col className="w-[50px] sm:w-[70px]" />
          <col className="w-[50px] sm:w-[70px]" />
          <col className="w-[50px] sm:w-[70px]" />
          <col className="w-[50px] sm:w-[70px]" />
          <col className="w-[50px] sm:w-[70px]" />
          <col className="w-[50px] sm:w-[70px]" />
          <col className="w-[50px] sm:w-[70px]" />
          {/*<col className="w-[200px] sm:w-[300px]" />*/}
        </colgroup>
        <thead>
          <tr className="h-8 bg-table-header *:pl-2 *:text-[13px]">
            <th>
              <span>순위</span>
            </th>
            <th className="text-left">
              <span>팀</span>
            </th>
            <th>
              <span>경기수</span>
            </th>
            <th>
              <span>승점</span>
            </th>
            <th>
              <span>승</span>
            </th>
            <th>
              <span>무</span>
            </th>
            <th>
              <span>패</span>
            </th>
            <th>
              <span>득점</span>
            </th>
            <th>
              <span>실점</span>
            </th>
            <th>
              <span>득실차</span>
            </th>
            {/*<th className="text-left">*/}
            {/*  <span className="pl-4">최근 전적</span>*/}
            {/*</th>*/}
          </tr>
        </thead>

        <tbody className="[&_tr:last-child]:border-0">
          {ranks.map((rank) => (
            <RankItem key={`${rank.teamId}-key`} rankData={rank} />
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
