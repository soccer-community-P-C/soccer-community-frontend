'use client';

import { IconShirtSport } from '@tabler/icons-react';
import Image from 'next/image';
import { getDateTitle, shortISOTimeHourMinute } from '@/utils/date-helper';
import Box from '@/components/common/box';
import GoalInfo from '@/components/match/goal-Info';
import { TGameDetails } from '@/types/schedules';
import useLeagueTitle from '@/hooks/use-league-title';

type MatchHeaderProps = TGameDetails;

export default function MatchHeader({ ...data }: MatchHeaderProps) {
  const { leagueName } = useLeagueTitle();
  // Todo: 추가 필요 데이터 - 로고

  console.log(data);

  const { venue, gameDate, home, homeScore, awayScore, away, matchDay, goals, homeLogo, awayLogo } =
    data;

  return (
    <header>
      <Box className="overflow-hidden bg-gray-600 px-0 pb-0 pt-0 text-white">
        <header className="bg-gray-800 p-2 sm:px-6">
          <div className="flex flex-col justify-between text-xs text-gray-200 sm:flex-row sm:text-base">
            <strong>
              {leagueName} {matchDay}R
            </strong>
            <div className="flex gap-4">
              <dl>
                {gameDate ? getDateTitle(new Date(gameDate)) : null}{' '}
                {shortISOTimeHourMinute(gameDate)}
              </dl>
              <span className="sm-block">|</span>
              <dl className="ml-auto">{venue}</dl>
            </div>
          </div>
        </header>
        <section className="flex flex-col items-center justify-center gap-2 ">
          <div className="flex h-14 w-full items-center justify-center gap-2 text-base font-semibold sm:gap-6 sm:text-xl md:text-2xl lg:text-4xl">
            <div className="sm-block flex-[0.5_0.5_25%] text-right font-semibold hover:text-gray-200">
              {home}
            </div>
            <Image
              alt="홈로고"
              className="h-[60px] w-[60px]"
              height={60}
              src={homeLogo}
              width={60}
            />

            <div className="mx-0 min-w-16 text-center">
              {!homeScore || !awayScore ? '경기전' : `${homeScore} - ${awayScore}`}
            </div>
            {/*<IconShirtSport size={60} stroke={2} />*/}
            <Image
              alt="원정로고"
              className="h-[60px] w-[60px]"
              height={60}
              src={awayLogo}
              width={60}
            />

            <div className="sm-block flex-[0.5_0.5_25%] font-semibold hover:text-gray-200">
              {away}
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 border-t border-border-and-divide p-2 text-xs sm:py-4 lg:text-base">
          <div className="flex flex-col flex-wrap items-center justify-start gap-y-1 lg:flex-row lg:justify-end lg:gap-x-8 lg:gap-y-4 lg:pr-16">
            {goals.map(({ playerName, teamName, time }) => {
              if (home === teamName) {
                return (
                  <GoalInfo key={`key-${playerName}-${time}}`} player={playerName} time={time} />
                );
              }
            })}
          </div>

          <div className="flex flex-col flex-wrap items-center gap-y-1 lg:flex-row lg:gap-x-8 lg:gap-y-4 lg:pl-16">
            {goals.map(({ playerName, teamName, time }) => {
              if (away === teamName) {
                return (
                  <GoalInfo
                    away={true}
                    key={`key-${playerName}-${time}}`}
                    player={playerName}
                    time={time}
                  />
                );
              }
            })}
          </div>
        </section>
      </Box>
    </header>
  );
}
