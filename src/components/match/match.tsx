'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useGetGameByLeagueGameId } from '@/api/league-game';
import { Button } from '@/components/ui/button';
import MatchHeader from '@/components/match/match-header';
import MatchSection from '@/components/match/match-section';
import { LoadingBox } from '@/components/common/loading-spinner';
import useAllUrls from '@/hooks/use-all-urls';

export type MatchProps = {
  leagueGameId: string;
};

export default function Match({ leagueGameId }: MatchProps) {
  const { URL_SCHEDULE } = useAllUrls();
  const router = useRouter();
  const { isPending, data, error } = useGetGameByLeagueGameId({ leagueGameId });
  // Todo: 필요 정보 - 기록, 투표 정보, 뛴 선수 정보(선수 id, 프로필, 시즌 기록, 경력사항)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isPending) {
    return <LoadingBox />;
  }

  if (error) {
    return (
      <div>
        <div>데이터를 가져오는데 실패했습니다.</div>
        <Button onClick={() => router.replace(URL_SCHEDULE)}>뒤로 가기</Button>
      </div>
    );
  }

  return (
    <>
      <MatchHeader {...data} />
      <MatchSection {...data} />
    </>
  );
}
