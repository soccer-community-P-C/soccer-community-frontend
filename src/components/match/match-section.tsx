'use client';

import { useState } from 'react';
import { IconBrandHipchat, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import Box from '@/components/common/box';
import MatchRecord from '@/components/match/match-record';
import { TGameDetails } from '@/types/schedules';

type MatchSectionProps = TGameDetails;

export default function MatchSection({ ...data }: MatchSectionProps) {
  const { home, away } = data;
  const [homeCheeringCount, setHomeCheeringCount] = useState(0);
  const [awayCheeringCount, setAwayCheeringCount] = useState(0);

  const [isTalkOpen, setIsTalkOpen] = useState(false);

  return (
    <section className="flex gap-2">
      <MatchRecord {...data} />
      <aside className="flex w-[640px] flex-col gap-2">
        <Box className="gap-2">
          <strong>승부예측</strong>
          <div className="relative flex h-[60px] w-full select-none items-center overflow-hidden rounded-2xl bg-gray-200 text-center text-xs">
            <button
              className="button-vote-item flex-all-center flex-1 flex-col border-r border-white hover:bg-gray-300 active:scale-110"
              type="button"
            >
              <span className="font-semibold">{home}</span>
              <span className="text-xs">20%</span>
            </button>
            <button
              className="button-vote-item flex-all-center flex-1 flex-col hover:bg-gray-300 active:scale-110"
              type="button"
            >
              <span className="font-semibold">무승부</span>
              <span className="text-xs">60%</span>
            </button>
            <button
              className="button-vote-item flex-all-center flex-1 flex-col border-l border-white hover:bg-gray-300 active:scale-110"
              type="button"
            >
              <span className="font-semibold">{away}</span>
              <span className="text-xs">20%</span>
            </button>
          </div>
        </Box>
        <Box className="gap-2">
          <strong>팀응원</strong>
          <div className="flex h-[100px] w-full cursor-pointer select-none items-center overflow-hidden text-[#f9cb7d]">
            <button
              className=" button-vote-item flex-all-center w-full flex-col rounded-lg border bg-[#0b1c7c] p-2 hover:opacity-85 active:scale-95"
              onClick={() => setHomeCheeringCount((prevState) => prevState + 1)}
              style={{
                width: `${(homeCheeringCount / (homeCheeringCount + awayCheeringCount)) * 100}%`,
                minWidth: '20%',
              }}
              type="button"
            >
              <span>{home}</span>
              <span className="text-xs">{homeCheeringCount}</span>
            </button>
            <button
              className="button-vote-item flex-all-center w-full flex-col rounded-lg border bg-[#0b1c7c] p-2 hover:opacity-85 active:scale-95"
              onClick={() => setAwayCheeringCount((prevState) => prevState + 1)}
              style={{
                width: `${(awayCheeringCount / (homeCheeringCount + awayCheeringCount)) * 100}%`,
                minWidth: '20%',
              }}
              type="button"
            >
              <span>{away}</span>
              <span className="text-xs">{awayCheeringCount}</span>
            </button>
          </div>
        </Box>
        <Box>
          <div className="flex w-full justify-between">
            <strong>응원 오픈톡</strong>
            <button onClick={() => setIsTalkOpen((prevState) => !prevState)} type="button">
              {isTalkOpen ? <IconChevronUp stroke={2} /> : <IconChevronDown stroke={2} />}
            </button>
          </div>
          <hr />
          <div className="flex-all-center h-full w-full flex-col opacity-70">
            <IconBrandHipchat height={96} stroke={2} width={96} />
            <p>응원 톡이 접혀 있어요</p>
          </div>
        </Box>
      </aside>
    </section>
  );
}
