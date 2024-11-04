import PlayerStatItem from '@/components/player/player-stat-item';

export default function PlayerStat() {
  return (
    <div className="max-x-[400px] basis-2/5">
      <strong className="text-xl font-semibold text-yellow-700">23/24 시즌 기록</strong>
      <div className="mt-4 overflow-hidden">
        <PlayerStatItem description="-" title="경기" />
        <PlayerStatItem description="-" title="득점" />
        <PlayerStatItem description="-" title="도움" />
        <PlayerStatItem description="-" title="공격P" />
        {/*<PlayerStatItem description="-" title="슈팅" />*/}
        {/*<PlayerStatItem description="-" title="유효슈팅" />*/}
        <PlayerStatItem description="-" title="경기당 득점" />
        <PlayerStatItem description="-" title="출장(분)" />
      </div>
    </div>
  );
}
