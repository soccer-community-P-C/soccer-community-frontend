import Link from 'next/link';
import Image from 'next/image';
import { TGamePlayer } from '@/types/schedules';
import FormationItem from '@/components/match/formation-item';

interface FormationProps {
  homeFormation: string | null;
  awayFormation: string | null;
  homePlayers: TGamePlayer[] | null;
  awayPlayers: TGamePlayer[] | null;
  awayLogo: string;
  homeLogo: string;
}

export default function Formation({
  homePlayers,
  awayPlayers,
  homeFormation,
  awayFormation,
  awayLogo,
  homeLogo,
}: FormationProps) {
  if (!homeFormation || !awayFormation) {
    return <div className="text-lg">경기 시작 30분전에 라인업과 포메이션 정보가 나옵니다.</div>;
  }
  // Todo: 라인업 UI 수정
  return (
    <>
      <div className="w-full md:h-[400px]">
        <div className="flex h-[30px] w-full">
          <div className="flex-all-center w-full sm:w-1/2">
            <p className="flex text-lg">
              <Image alt="홈 로고" className="mr-2 h-6 w-6" height={16} src={homeLogo} width={16} />
              <span className="font-semibold">{homeFormation}</span>
            </p>
          </div>
          <div className="sm:flex-all-center hidden w-1/2">
            <p className="flex text-lg">
              <Image
                alt="원정 로고"
                className="mr-2 h-6 w-6"
                height={16}
                src={awayLogo}
                width={16}
              />
              <span className="font-semibold">{awayFormation}</span>
            </p>
          </div>
        </div>
        <div className="relative flex h-full w-full flex-col sm:flex-row">
          <FormationItem formation={[1, ...homeFormation.split('-').map(Number)]} isLeft={true} />
          <div className="flex-all-center mt-2 w-full sm:hidden">
            <p className="mx-auto flex text-lg">
              <Image
                alt="원정 로고"
                className="mr-2 h-6 w-6"
                height={16}
                src={awayLogo}
                width={16}
              />
              <span className="font-semibold">{awayFormation}</span>
            </p>
          </div>
          <FormationItem formation={[1, ...awayFormation.split('-').map(Number)]} isLeft={false} />
          <span className="sm-block absolute left-1/2 top-0 h-full w-[2px] bg-[#338657]" />
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
