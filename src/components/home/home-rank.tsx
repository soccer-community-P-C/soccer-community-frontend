'use client';

import { ReactNode, useState } from 'react';
import BoxHeading from '@/components/common/box-heading';
import ViewAllLinkItem from '@/components/common/view-all-link-item';
import RankTabList from '@/components/home/rank-tab-list';
import RankTable from '@/components/rank/rank-table';
import { useGetTeamRankList } from '@/api/league';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import { useLeagueInfo } from '@/hooks/useLeagueName';

export type TTabList = {
  title: string;
  content: ReactNode;
};

export default function HomeRank() {
  // Todo: 프리미어리그, 라리가 시즌과 아이디 최신 반영
  const { leagueId: plLeagueId } = useLeagueInfo({ season: '2024', competition: 'PL' });
  const { leagueId: laligaLeagueId } = useLeagueInfo({ season: '2024', competition: 'LALIGA' });

  const {
    isPending: isPendingPL,
    data: dataPL,
    error: errorPL,
  } = useGetTeamRankList({ season: '2024', leagueId: plLeagueId });

  const {
    isPending: isPendingLaliga,
    data: dataLaliga,
    error: errorLaliga,
  } = useGetTeamRankList({ season: '2024', leagueId: laligaLeagueId });
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
          {dataPL && dataPL.rankInfo.length > 0 ? (
            <RankTable ranks={dataPL.rankInfo[dataPL.rankInfo.length - 1].ranks} />
          ) : (
            <div>데이터가 없습니다</div>
          )}
        </>
      ),
    },
    {
      title: '라리가',
      content: (
        <>
          {isPendingLaliga ? <LoadingSpinner /> : null}
          {errorLaliga ? <div>데이터 가져오기 실패</div> : null}
          {dataLaliga && dataLaliga.rankInfo.length > 0 ? (
            <RankTable ranks={dataLaliga.rankInfo[dataLaliga.rankInfo.length - 1].ranks} />
          ) : (
            <div>데이터가 없습니다</div>
          )}
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
