import RankItem from '@/components/rank/rank-item';

export default function RankTable() {
  return (
    <table className="w-full caption-bottom">
      <colgroup>
        <col width={70} />
        <col width={450} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col />
      </colgroup>
      <thead>
        <tr className="h-[40px] border-b bg-[#f7f7f9] *:pl-2">
          <th>순위</th>
          <th className="text-left">
            <div className="pl-4">팀</div>
          </th>
          <th>경기</th>
          <th>승</th>
          <th>무</th>
          <th>패</th>
          <th>득점</th>
          <th>실점</th>
          <th>득실차</th>
          <th>승점</th>
          <th className="text-left">
            <div className="pl-4">최근 전적</div>
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
  );
}
