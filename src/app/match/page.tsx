import { Suspense } from 'react';
import Container from '@/components/common/container';
import Match from '@/components/match/match';
import Loading from '@/app/(league)/loading';

export default function MatchPage() {
  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <Match />
      </Suspense>
    </Container>
  );
}
