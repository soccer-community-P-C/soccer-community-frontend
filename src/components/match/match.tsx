'use client';

import { useRouter } from 'next/navigation';
import { useGetGameByLeagueGameId } from '@/api/league-game';
import Button from '@/components/common/button';
import MatchHeader from '@/components/match/match-header';
import MatchSection from '@/components/match/match-section';
import { LoadingBox } from '@/components/common/loading-spinner';

export type MatchProps = {
  leagueGameId: string;
};

export default function Match({ leagueGameId }: MatchProps) {
  const { isPending, data, error } = useGetGameByLeagueGameId({ leagueGameId });
  // Todo: 필요 정보 - 로고, 기록, 투표 정보, 뛴 선수 정보
  const router = useRouter();

  if (isPending) {
    return <LoadingBox />; // 스켈레톤 로딩이나 로딩 바를 추가할 수 있습니다.
  }

  if (error) {
    return (
      <div>
        <div>데이터를 가져오는데 실패했습니다.</div>
        <Button onClick={() => router.replace('/premier/league-game')}>뒤로 가기</Button>
      </div>
    );
  }

  const { gameDate, away, home, homeScore, awayScore } = data;
  return (
    <>
      q
      <MatchHeader
        away={away}
        awayScore={awayScore}
        date={gameDate}
        home={home}
        homeScore={homeScore}
      />
      <MatchSection {...data} />
    </>
  );
}
