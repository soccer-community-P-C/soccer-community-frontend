import { twMerge } from 'tailwind-merge';
import PlayerRankItem from '@/components/player-rank/player-rank-item';
import PlayerRankThead from '@/components/player-rank/player-rank-thead';

type PlayerRankTableProps = {
  isMatch?: boolean;
};

export default function PlayerRankTable({ isMatch }: PlayerRankTableProps) {
  return (
    <table
      className={twMerge('w-full table-fixed caption-bottom overflow-hidden', isMatch && 'w-auto')}
    >
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
