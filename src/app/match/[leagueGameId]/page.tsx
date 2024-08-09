import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import Container from '@/components/common/container';
import Loading from '@/app/(league)/loading';
import Match from '@/components/match/match';

type MatchPageProps = {
  params: {
    leagueGameId: string;
  };
};

export default function MatchPage({ params }: MatchPageProps) {
  const { leagueGameId } = params;

  if (!leagueGameId) {
    if (typeof window !== 'undefined') {
      redirect('/premier/league-game');
    } else {
      return null;
    }
  }

  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <Match leagueGameId={leagueGameId} />
      </Suspense>
    </Container>
  );
}
