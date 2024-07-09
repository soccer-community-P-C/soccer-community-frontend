import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import FullViewLinkItem from '@/components/common/full-view-link-item';
import PremierResult from '@/components/home/premier-result';
import LaligaResult from '@/components/home/laliga-result';
import RankTable from '@/components/rank/rank-table';

export default async function HomePage() {
  return (
    <section className="container relative mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
      <PremierResult />
      <LaligaResult />
      <Box className="col-span-2 lg:col-span-1">
        <div className="flex-all-center flex justify-between">
          <BoxHeading hTagType="h3">프리미어리그 최신 게시글</BoxHeading>
          <FullViewLinkItem href="/premier/board" />
        </div>
      </Box>
      <Box className="col-span-2 lg:col-span-1">
        <div className="flex-all-center flex justify-between">
          <BoxHeading hTagType="h3">라리가 최신 게시글</BoxHeading>
          <FullViewLinkItem href="/laliga/board" />
        </div>
      </Box>
      <Box className="col-span-2 h-96">
        <div className="flex-all-center flex justify-between">
          <BoxHeading hTagType="h3">프리미어리그 순위</BoxHeading>
          <FullViewLinkItem href="/premier/rank" />
        </div>
        <RankTable />
      </Box>
      <Box className="col-span-2 h-96">
        <div className="flex-all-center flex justify-between">
          <BoxHeading hTagType="h3">라리가 순위</BoxHeading>
          <FullViewLinkItem href="/laliga/rank" />
        </div>
        <RankTable />
      </Box>
    </section>
  );
}
