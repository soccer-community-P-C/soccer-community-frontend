import Image from 'next/image';
import { TGamePlayer } from '@/types/schedules';
import LineupPlayerItem from '@/components/match/lineup/lineup-player-item';

type LineupProps = {
  homePlayers: TGamePlayer[] | null;
  awayPlayers: TGamePlayer[] | null;
  awayLogo: string;
  homeLogo: string;
};

export default function Lineup({ homePlayers, awayPlayers, awayLogo, homeLogo }: LineupProps) {
  return (
    <div className="flex w-full justify-between">
      <div className="w-1/2 ">
        <div className="mb-2 flex border-b pb-2 text-lg font-semibold">
          <Image alt="홈로고" className="mr-2 h-10 w-10" height={24} src={homeLogo} width={24} />
          <p className="flex-all-center">홈</p>
        </div>
        {homePlayers?.map((player) => (
          <LineupPlayerItem key={`key-${player.playerId}}`} player={player} />
        ))}
      </div>
      <div className="w-1/2 text-right">
        <div className="mb-2 flex justify-end border-b pb-2 text-lg font-semibold">
          <p className="flex-all-center">원정</p>
          <Image alt="원정로고" className="ml-2 h-10 w-10" height={24} src={awayLogo} width={24} />
        </div>
        {awayPlayers?.map((player) => (
          <LineupPlayerItem isAway={true} key={`key-${player.playerId}}`} player={player} />
        ))}
      </div>
    </div>
  );
}
