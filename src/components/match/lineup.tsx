import { TGamePlayer } from '@/types/schedules';
import Formation from '@/components/match/formation';
import LineupPlayerList from '@/components/match/lineup-player-list';

type LineupProps = {
  homeFormation: string | null;
  awayFormation: string | null;
  homePlayers: TGamePlayer[] | null;
  awayPlayers: TGamePlayer[] | null;
  awayLogo: string;
  homeLogo: string;
};

export default function Lineup({
  homePlayers,
  awayPlayers,
  homeFormation,
  awayFormation,
  awayLogo,
  homeLogo,
}: LineupProps) {
  if (!homeFormation || !awayFormation) {
    return <div className="text-lg">경기 시작 30분전에 라인업과 포메이션 정보가 나옵니다.</div>;
  }

  return (
    <article className="flex flex-col gap-8">
      <Formation
        awayFormation={awayFormation}
        awayLogo={awayLogo}
        homeFormation={homeFormation}
        homeLogo={homeLogo}
      />
      <LineupPlayerList
        awayLogo={awayLogo}
        awayPlayers={awayPlayers}
        homeLogo={homeLogo}
        homePlayers={homePlayers}
      />
    </article>
  );
}
