'use client';

import { useQuery } from '@tanstack/react-query';
import BoxHeading from '@/components/common/box-heading';
import FullViewLinkItem from '@/components/common/full-view-link-item';
import Loading from '@/app/(league)/loading';
import ResultOfGame from '@/components/result/result-of-game';
import Box from '@/components/common/box';
import { instance } from '@/utils/intance';

export default function PremierResult() {
  const {
    isPending,
    data: gameList,
    error,
  } = useQuery({
    queryKey: ['resultOfGameList', '2024-02-01'],
    queryFn: async () => {
      const { data } = await instance.get(`/leagueGame/date/2024-02-01`);

      return data;
    },
  });

  return (
    <Box className="col-span-2 lg:col-span-1">
      <div className="flex-all-center flex justify-between">
        <BoxHeading hTagType="h3">프리미어리그 경기 일정</BoxHeading>
        <FullViewLinkItem href="/premier/result" />
      </div>
      {isPending ? <Loading /> : null}
      {error ? <div>Error</div> : null}
      {gameList?.responses ? (
        <ResultOfGame
          gameList={gameList?.responses}
          isHome={true}
          selectedDate={new Date('2024-02-01')}
        />
      ) : null}
    </Box>
  );
}
