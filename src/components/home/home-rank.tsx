'use client';

import { ReactNode, useState } from 'react';
import BoxHeading from '@/components/common/box-heading';
import ViewAllLinkItem from '@/components/common/view-all-link-item';
import RankTabList from '@/components/home/rank-tab-list';
import RankTable from '@/components/rank/rank-table';

const tabList = [
  { title: '프리미어리그', content: <RankTable /> },
  { title: '라리가', content: <RankTable /> },
];

export type TTabList = {
  title: string;
  content: ReactNode;
};

export default function HomeRank() {
  const [activeTab, setActiveTab] = useState(0);
  function handleTabChange(index: number) {
    setActiveTab(index);
  }

  return (
    <div className="flex h-80 w-full flex-col gap-2 rounded-lg bg-white">
      <div className="flex-all-center flex justify-between">
        <div className="flex-all-center flex">
          <BoxHeading hTagType="h4">경기 순위</BoxHeading>
        </div>
        <ViewAllLinkItem href="/premier/rank" />
      </div>
      <RankTabList activeTab={activeTab} onActiveTab={handleTabChange} tabList={tabList} />
      {tabList[activeTab].content}
    </div>
  );
}
