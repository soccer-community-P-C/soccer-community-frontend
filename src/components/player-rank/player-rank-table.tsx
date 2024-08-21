import PlayerRankItem from '@/components/player-rank/player-rank-item';
import PlayerRankThead from '@/components/player-rank/player-rank-thead';

export default function PlayerRankTable() {
  return (
    <table className="w-full table-fixed caption-bottom overflow-hidden">
      <colgroup>
        <col width={50} />
        <col width={200} />
        <col width={150} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
        <col width={70} />
      </colgroup>
      <PlayerRankThead />
      <tbody className="[&_tr:last-child]:border-0">
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
        <PlayerRankItem />
      </tbody>
    </table>
  );
}
