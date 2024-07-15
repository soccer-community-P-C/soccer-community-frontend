import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import ViewAllLinkItem from '@/components/common/view-all-link-item';
import PremierResult from '@/components/home/premier-result';
import LaligaResult from '@/components/home/laliga-result';
import RankTable from '@/components/rank/rank-table';
import Dropdown from '@/components/home/dropdown';

export default async function HomePage() {
  return (
    <section className="container relative mx-auto flex flex-col gap-4">
      <Box>
        <BoxHeading hTagType="h3">게시글</BoxHeading>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Box>
            <div className="flex-all-center flex justify-between">
              <BoxHeading hTagType="h4">프리미어리그 최신 게시글</BoxHeading>
              <ViewAllLinkItem href="/premier/board" />
            </div>
          </Box>
          <Box>
            <div className="flex-all-center flex justify-between">
              <BoxHeading hTagType="h4">라리가 최신 게시글</BoxHeading>
              <ViewAllLinkItem href="/laliga/board" />
            </div>
          </Box>
        </div>
      </Box>
      <Box>
        {/*Todo: 경기 시간 표시*/}
        <PremierResult />
        <LaligaResult />
        {/*Todo: 순위 - 리그 탭으로 변환 */}
        <div className="flex h-80 w-full flex-col gap-2 rounded-lg bg-white">
          <div className="flex-all-center flex justify-between">
            <div className="flex-all-center flex">
              <BoxHeading hTagType="h4">프리미어리그 순위</BoxHeading>
              <Dropdown />
            </div>
            <ViewAllLinkItem href="/premier/rank" />
          </div>

          <RankTable />
        </div>
      </Box>
    </section>
  );
}
