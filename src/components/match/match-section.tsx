'use client';

import { useState } from 'react';
import Box from '@/components/common/box';
import MatchRecord from '@/components/match/match-record';
import { TGameDetails } from '@/types/schedules';
import OpenTalk from '@/components/match/open-talk';

type MatchSectionProps = TGameDetails;

export default function MatchSection({ ...data }: MatchSectionProps) {
  const { home, away } = data;
  const [homeCheeringCount, setHomeCheeringCount] = useState(0);
  const [awayCheeringCount, setAwayCheeringCount] = useState(0);

  return (
    <section className="flex w-full flex-col-reverse gap-2 xl:flex-row">
      <div className="flex w-full flex-col gap-2">
        <MatchRecord {...data} />
      </div>
      <aside className="flex w-full shrink-0 flex-col gap-2 sm:flex-row xl:w-[450px] xl:flex-col">
        <Box className="gap-2">
          <strong>승부예측</strong>
          <div className="flex h-[100px] w-full select-none items-center gap-2 overflow-hidden text-center text-xs xl:h-[60px]">
            <button
              className="button-vote-item flex-all-center w-full flex-1 flex-col rounded-lg bg-hover shadow active:scale-110"
              type="button"
            >
              <span className="font-semibold">{home}</span>
              <span className="text-xs">20%</span>
            </button>
            <button
              className="button-vote-item flex-all-center w-full flex-1 flex-col rounded-lg bg-hover shadow active:scale-110"
              type="button"
            >
              <span className="font-semibold">무승부</span>
              <span className="text-xs">60%</span>
            </button>
            <button
              className="button-vote-item flex-all-center w-full flex-1 flex-col rounded-lg bg-hover shadow active:scale-110"
              type="button"
            >
              <span className="font-semibold">{away}</span>
              <span className="text-xs">20%</span>
            </button>
          </div>
        </Box>
        <Box className="gap-2">
          <strong>팀응원</strong>
          <div className="flex h-[100px] w-full cursor-pointer select-none items-center gap-2 overflow-hidden text-foreground">
            <button
              className="button-vote-item flex-all-center w-full flex-col rounded-lg bg-hover p-2 shadow hover:opacity-85 active:scale-95"
              onClick={() => setHomeCheeringCount((prevState) => prevState + 1)}
              style={{
                width: `${(homeCheeringCount / (homeCheeringCount + awayCheeringCount)) * 100}%`,
                minWidth: '30%',
              }}
              type="button"
            >
              <span className="text-[14px] md:text-base">{home}</span>
              <span className="font-semibold">{homeCheeringCount}</span>
            </button>
            <button
              className="button-vote-item flex-all-center w-full flex-col rounded-lg bg-hover p-2 shadow hover:opacity-85 active:scale-95"
              onClick={() => setAwayCheeringCount((prevState) => prevState + 1)}
              style={{
                width: `${(awayCheeringCount / (homeCheeringCount + awayCheeringCount)) * 100}%`,
                minWidth: '30%',
              }}
              type="button"
            >
              <span className="text-[14px] md:text-base">{away}</span>
              <span className="font-semibold">{awayCheeringCount}</span>
            </button>
          </div>
        </Box>
        <Box className="hidden xl:block">
          <OpenTalk />
        </Box>
      </aside>
    </section>
  );
}
