import { Suspense } from 'react';
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

  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <Match leagueGameId={leagueGameId} />
      </Suspense>
    </Container>
  );
}
