'use client';

import { ReactNode, useState } from 'react';
import BoxHeading from '@/components/common/box-heading';
import ViewAllLinkItem from '@/components/common/view-all-link-item';
import RankTabList from '@/components/home/rank-tab-list';
import RankTable from '@/components/rank/rank-table';
import { useGetTeamRankList } from '@/api/league';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import { LALIGA_LEAGUE_ID, PREMIER_LEAGUE_ID } from '@/constants/league-game-id';

export type TTabList = {
  title: string;
  content: ReactNode;
};

export default function HomeRank() {
  // Todo: 프리미어리그, 라리가 시즌과 아이디 최신 반영
  // Todo: 팀 순위 API 현재 오류 - 09/10
  const {
    isPending: isPendingPL,
    data: dataPL,
    error: errorPL,
  } = useGetTeamRankList({ season: '2024', leagueId: PREMIER_LEAGUE_ID });

  const {
    isPending: isPendingLaliga,
    data: dataLaliga,
    error: errorLaliga,
  } = useGetTeamRankList({ season: '2024', leagueId: LALIGA_LEAGUE_ID });
  const [activeTab, setActiveTab] = useState(0);
  function handleTabChange(index: number) {
    setActiveTab(index);
  }

  const tabList = [
    {
      title: '프리미어리그',
      content: (
        <>
          {isPendingPL ? <LoadingSpinner /> : null}
          {errorPL ? <div>데이터 가져오기 실패</div> : null}
          {dataPL ? <RankTable ranks={dataPL} /> : null}
        </>
      ),
    },
    {
      title: '라리가',
      content: (
        <>
          {isPendingLaliga ? <LoadingSpinner /> : null}
          {errorLaliga ? <div>데이터 가져오기 실패</div> : null}
          {dataLaliga ? <RankTable ranks={dataLaliga} /> : null}
        </>
      ),
    },
  ];

  return (
    <div className="flex h-80 w-full flex-col gap-2 rounded-lg">
      <div className="flex items-center justify-between">
        <BoxHeading hTagType="h4">경기 순위</BoxHeading>
        <ViewAllLinkItem href="/premier/rank" />
      </div>
      <RankTabList activeTab={activeTab} onActiveTab={handleTabChange} tabList={tabList} />
      {tabList[activeTab].content}
    </div>
  );
}
