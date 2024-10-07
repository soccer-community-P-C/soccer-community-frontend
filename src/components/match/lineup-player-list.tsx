import Image from 'next/image';
import { TGamePlayer } from '@/types/schedules';
import LineupPlayerItem from '@/components/match/lineup-player-item';

type PlayerListProps = {
  homePlayers: TGamePlayer[] | null;
  awayPlayers: TGamePlayer[] | null;
  awayLogo: string;
  homeLogo: string;
};

export default function LineupPlayerList({
  homePlayers,
  awayPlayers,
  awayLogo,
  homeLogo,
}: PlayerListProps) {
  return (
    <div className="flex w-full justify-between">
      <div className="w-1/2">
        <div className="mb-2 flex text-lg font-semibold">
          <Image alt="홈로고" className="mr-2 h-6 w-6" height={16} src={homeLogo} width={16} />
          <p>라인업</p>
        </div>
        {homePlayers?.map((player) => (
          <LineupPlayerItem key={`key-${player.playerId}}`} player={player} />

          // <Link
          //   className="hover:text-gray-300"
          //   href={`/player/${player.playerId}`}
          //   key={player.playerId}
          // >
          //   <p>{player.playerKrName}</p>
          // </Link>
        ))}
      </div>
      <div className="w-1/2 text-right">
        <div className="mb-2 flex justify-end text-lg font-semibold">
          <p>라인업</p>
          <Image alt="홈로고" className="ml-2 h-6 w-6" height={16} src={awayLogo} width={16} />
        </div>
        {awayPlayers?.map((player) => (
          <LineupPlayerItem isAway={true} key={`key-${player.playerId}}`} player={player} />
          // <div className="my-1 border-b border-gray-200" key={player.playerId}>
          //   <Link
          //     className="hover:text-gray-400 dark:hover:text-gray-300"
          //     href={`/player/${player.playerId}`}
          //   >
          //     <p>{player.playerKrName}</p>
          //   </Link>
          //   <div className="flex justify-end gap-2 text-sm text-slate-400 ">
          //     <p>
          //       {player.shirtNumber} | {player.position}
          //     </p>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
}
