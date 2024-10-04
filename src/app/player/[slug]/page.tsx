import Container from '@/components/common/container';
import Player from '@/components/player/player';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <Player playerId={params.slug} />
    </Container>
  );
}
