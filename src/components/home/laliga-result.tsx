'use client';

import { useQuery } from '@tanstack/react-query';
import BoxHeading from '@/components/common/box-heading';
import FullViewLinkItem from '@/components/common/full-view-link-item';
import Loading from '@/app/(league)/loading';
import ResultOfGame from '@/components/result/result-of-game';
import { instance } from '@/utils/intance';

export default function LaligaResult() {
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
    <div className="flex w-full flex-col gap-2 rounded-lg bg-white">
      <div className="flex-all-center flex justify-between">
        <BoxHeading hTagType="h4">라리가 경기 일정</BoxHeading>
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
    </div>
  );
}
