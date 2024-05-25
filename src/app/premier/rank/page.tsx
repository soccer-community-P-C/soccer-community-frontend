import BoxHeading from '@/components/common/box-heading';
import Box from '@/components/common/box';
import RankTable from '@/components/rank/rank-table';

export default function RankPage() {
  return (
    <Box>
      <BoxHeading hTagType="h2">23/24 프리미어리그 순위</BoxHeading>
      <div className="overflow-hidden rounded-md border border-[#777784]">
        <div className="relative w-full text-center">
          <RankTable />
        </div>
      </div>
    </Box>
  );
}
