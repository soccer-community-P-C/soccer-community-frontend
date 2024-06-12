import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import PlayerRank from '@/components/player-rank/player-rank';

export default function PlayerRankPage() {
  return (
    <Box>
      <BoxHeading hTagType="h2">23/24 프리미어리그 선수 순위</BoxHeading>
      <PlayerRank />
    </Box>
  );
}
