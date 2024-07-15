import RankItem from '@/components/rank/rank-item';
import TableContainer from '@/components/common/table/table-container';

export default function RankTable() {
  return (
    <TableContainer>
      <table className="w-full table-fixed caption-bottom overflow-hidden">
        <colgroup>
          <col width={50} />
          <col width={300} />
          <col width={70} />
          <col width={70} />
          <col width={70} />
          <col width={70} />
          <col width={70} />
          <col width={70} />
          <col width={70} />
          <col width={70} />
          <col width={300} />
        </colgroup>
        <thead>
          <tr className="h-8 bg-gray-200 *:pl-2 *:text-[13px]">
            <th>
              <span>순위</span>
            </th>
            <th className="text-left">
              <span>팀</span>
            </th>
            <th>
              <span>경기</span>
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
            <th>
              승점<span>순위</span>
            </th>
            <th className="text-left">
              <span className="pl-4">최근 전적</span>
            </th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
          <RankItem />
        </tbody>
      </table>
    </TableContainer>
  );
}
