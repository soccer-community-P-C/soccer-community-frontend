import Box from '@/components/common/box';
import HomeRank from '@/components/home/home-rank';
import LaligaSchedule from '@/components/home/laliga-schedule';
import PremierSchedule from '@/components/home/premier-schedule';
import Container from '@/components/common/container';
import HomePost from '@/components/home/home-post';

export default async function HomePage() {
  return (
    <Container>
      <Box>
        <HomePost />
      </Box>

      {/*<Box>*/}
      {/*  <BoxHeading hTagType="h3">게시글</BoxHeading>*/}
      {/*  <div className="flex flex-col gap-4 lg:flex-row">*/}
      {/*    <Box>*/}
      {/*      <div className="flex-all-center flex justify-between">*/}
      {/*        <BoxHeading hTagType="h4">프리미어리그 최신 게시글</BoxHeading>*/}
      {/*      </div>*/}
      {/*    </Box>*/}
      {/*    <Box>*/}
      {/*      <div className="flex-all-center flex justify-between">*/}
      {/*        <BoxHeading hTagType="h4">라리가 최신 게시글</BoxHeading>*/}
      {/*        /!*<ViewAllLinkItem href="/laliga/board" />*!/*/}
      {/*      </div>*/}
      {/*    </Box>*/}
      {/*  </div>*/}
      {/*</Box>*/}
      {/*<ViewAllLinkItem href="/premier/board" />*/}

      <Box>
        <PremierSchedule />
        <LaligaSchedule />
      </Box>
      <Box>
        <HomeRank />
      </Box>
    </Container>
  );
}
