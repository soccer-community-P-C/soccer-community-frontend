import Link from 'next/link';
import { TGamePlayer } from '@/types/schedules';

export default function LineupPlayerItem({
  player,
  isAway = false,
}: {
  player: TGamePlayer;
  isAway?: boolean;
}) {
  const firstName = player.playerKrName.split(' ')[0];
  const lastName = player.playerKrName.split(' ').slice(1).join(' ');

  return (
    <div className="my-1 border-b border-gray-200" key={player.playerId}>
      <Link
        className="flex w-full flex-col hover:text-gray-400 dark:hover:text-gray-300"
        href={`/player/${player.playerId}`}
      >
        {!firstName || !lastName || firstName.length === 0 || lastName.length === 0 ? (
          <span className="whitespace-pre-wrap text-[13px]"> </span>
        ) : (
          <span className="text-[13px]">{firstName}</span>
        )}
        {!firstName || !lastName || firstName.length === 0 || lastName.length === 0 ? (
          <span className="font-semibold">{firstName}</span>
        ) : (
          <span className="font-semibold">{lastName}</span>
        )}
      </Link>
      <div className={`flex gap-2 text-sm text-slate-400 ${isAway && 'justify-end'}`}>
        {isAway ? (
          <div className="flex gap-1">
            <p className="w-[140px] truncate">{player.position}</p>
            <span className="sm-block">|</span>
            <span className="sm-block">{player.shirtNumber}</span>
          </div>
        ) : (
          <div className="flex gap-1">
            <span className="sm-block">{player.shirtNumber}</span>
            <span className="sm-block">|</span>
            <p className="w-[140px] truncate">{player.position}</p>
          </div>
        )}
      </div>
    </div>
  );
}
