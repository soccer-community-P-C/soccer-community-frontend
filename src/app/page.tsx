import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import RankTable from '@/components/rank/rank-table';
import HomeRank from '@/components/home/home-rank';
import LaligaSchedule from '@/components/home/laliga-schedule';
import PremierSchedule from '@/components/home/premier-schedule';
import Container from '@/components/common/container';

const tabList = [
  { title: '프리미어리그 순위', content: <RankTable /> },
  { title: '라리가 순위', content: <RankTable /> },
];

export default async function HomePage() {
  return (
    <Container>
      <Box>
        <BoxHeading hTagType="h3">게시글</BoxHeading>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Box>
            <div className="flex-all-center flex justify-between">
              <BoxHeading hTagType="h4">프리미어리그 최신 게시글</BoxHeading>
              {/*<ViewAllLinkItem href="/premier/board" />*/}
            </div>
          </Box>
          <Box>
            <div className="flex-all-center flex justify-between">
              <BoxHeading hTagType="h4">라리가 최신 게시글</BoxHeading>
              {/*<ViewAllLinkItem href="/laliga/board" />*/}
            </div>
          </Box>
        </div>
      </Box>
      <Box>
        <PremierSchedule />
        <LaligaSchedule />
        <HomeRank tabList={tabList} />
      </Box>
    </Container>
  );
}
