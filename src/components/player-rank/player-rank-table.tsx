import PlayerRankItem from '@/components/player-rank/player-rank-item';
import PlayerRankThead from '@/components/player-rank/player-rank-thead';

export default function PlayerRankTable() {
  return (
    <table className="w-full table-fixed caption-bottom overflow-hidden">
      <colgroup>
        <col className="w-[50px]" />
        <col className="w-[100px] sm:w-[200px]" />
        <col className="w-[70px] sm:w-[150px]" />
        <col className="w-[50px] sm:w-[70px]" />
        <col className="w-[50px] sm:w-[70px]" />
        <col className="w-[50px] sm:w-[70px]" />
        <col className="w-[50px] sm:w-[70px]" />
        <col className="w-[50px] sm:w-[70px]" />
        <col className="w-[50px] sm:w-[70px]" />
        <col className="w-[50px] sm:w-[70px]" />
        <col className="w-[50px] sm:w-[70px]" />
        <col className="w-[50px] sm:w-[70px]" />
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
