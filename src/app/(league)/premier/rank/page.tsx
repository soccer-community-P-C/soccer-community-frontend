import BoxHeading from '@/components/common/box-heading';
import Box from '@/components/common/box';
import RankTable from '@/components/rank/rank-table';

export default function PremierRankPage() {
  return (
    <Box>
      <BoxHeading hTagType="h2">23/24 프리미어리그 순위</BoxHeading>

      <RankTable />
    </Box>
  );
}
