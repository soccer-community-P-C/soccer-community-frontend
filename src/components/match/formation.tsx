import Link from 'next/link';
import { TGamePlayer } from '@/types/schedules';
import FormationItem from '@/components/match/formation-item';

interface FormationProps {
  leftFormation: number[];
  rightFormation: number[];
  homePlayers: TGamePlayer[] | null;
  awayPlayers: TGamePlayer[] | null;
}

export default function Formation({
  homePlayers,
  awayPlayers,
  leftFormation,
  rightFormation,
}: FormationProps) {
  // Todo: 라인업 UI 수정
  return (
    <>
      <div className="w-full md:h-[400px]">
        <div className="relative flex h-full w-full flex-col sm:flex-row">
          <FormationItem formation={leftFormation} isLeft={true} />
          <FormationItem formation={rightFormation} isLeft={false} />
          <span className="sm-block absolute left-1/2 top-0 h-full w-[2px] bg-[#338657]" />
          <span className="absolute left-0 top-1/2 h-[2px] w-full bg-[#338657] sm:hidden" />
          <span className="sm-block absolute left-1/2 top-1/2 h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-[#338657]" />{' '}
        </div>
      </div>
      <div className="flex justify-between">
        <span>UI 수정 예정</span>
        <div>
          {homePlayers?.map((player) => (
            <Link
              className="hover:text-gray-300"
              href={`/player/${player.playerId}`}
              key={player.playerId}
            >
              <p>{player.playerKrName}</p>
            </Link>
          ))}
        </div>
        <div>
          {awayPlayers?.map((player) => (
            <Link
              className="hover:text-gray-400 dark:hover:text-gray-300"
              href={`/player/${player.playerId}`}
              key={player.playerId}
            >
              <p>{player.playerKrName}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
