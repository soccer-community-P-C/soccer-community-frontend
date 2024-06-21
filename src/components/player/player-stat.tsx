import PlayerStatItem from '@/components/player/player-stat-item';

export default function PlayerStat() {
  return (
    <div className="w-[400px] basis-2/5">
      <strong className="text-xl font-semibold text-yellow-700">23/24 시즌 기록</strong>
      <div className="mt-4 overflow-hidden">
        <PlayerStatItem description={31} title="경기" />
        <PlayerStatItem description={27} title="득점" />
        <PlayerStatItem description={5} title="도움" />
        <PlayerStatItem description={32} title="공격P" />
        <PlayerStatItem description={103} title="슈팅" />
        <PlayerStatItem description={55} title="유효슈팅" />
        <PlayerStatItem description={0.9} title="경기당 득점" />
        <PlayerStatItem description={0} title="출장(분)" />
      </div>
    </div>
  );
}
