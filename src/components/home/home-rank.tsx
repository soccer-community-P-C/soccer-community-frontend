'use client';

import { ReactNode, useState } from 'react';
import BoxHeading from '@/components/common/box-heading';
import ViewAllLinkItem from '@/components/common/view-all-link-item';
import RankTapList from '@/components/home/rank-tap-list';

export type TTapList = {
  title: string;
  content: ReactNode;
};

type HomeRankProps = {
  tabList: TTapList[];
};
export default function HomeRank({ tabList }: HomeRankProps) {
  const [activeTab, setActiveTab] = useState(0);
  function handleTabChange(index: number) {
    setActiveTab(index);
  }

  return (
    <div className="flex h-80 w-full flex-col gap-2 rounded-lg bg-white">
      <div className="flex-all-center flex justify-between">
        <div className="flex-all-center flex">
          <BoxHeading hTagType="h4">경기 순위</BoxHeading>

          {/*<Dropdown />*/}
        </div>
        <ViewAllLinkItem href="/premier/rank" />
      </div>
      <RankTapList activeTab={activeTab} onActiveTab={handleTabChange} tabList={tabList} />
      {tabList[activeTab].content}
    </div>
  );
}
