import { IconChevronRight } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';
import LinkItem from '@/components/common/link-item';
import BoxHeading from '@/components/common/box-heading';
import { getDateTitle } from '@/utils/date-helper';
import { TGame } from '@/types/league-games';
import LeagueGameContentItem from '@/components/league-game/league-game-content-item';

type LeagueGameContentProps = {
  gameList: TGame[];
  date: string;
  isHome: boolean;
};

export default function LeagueGameContent({ gameList, date, isHome }: LeagueGameContentProps) {
  return (
    <div className="divide-y divide-[#777784] overflow-hidden rounded-md border border-[#777784]">
      <BoxHeading
        className={twMerge('flex h-[60px] items-center bg-[#f7f7f9] pl-4', isHome && 'h-[40px]')}
        hTagType={isHome ? 'h4' : 'h3'}
      >
        {getDateTitle(new Date(date))}
      </BoxHeading>

      <div
        className={twMerge('items-center divide-y divide-[#777784] text-lg', isHome && 'text-base')}
      >
        {gameList.length > 0 ? (
          gameList.map(
            (
              { homeTeamName, homeLogo, homeScore, awayTeamName, awayLogo, awayScore, date },
              index,
            ) => (
              <LeagueGameContentItem
                awayLogo={awayLogo}
                awayScore={awayScore}
                awayTeamName={awayTeamName}
                date={date}
                homeLogo={homeLogo}
                homeScore={homeScore}
                homeTeamName={homeTeamName}
                isHome={isHome}
                key={index}
              />
            ),
          )
        ) : (
          <div className="p-2">
            <span>오늘은 경기가 없습니다.</span>
          </div>
        )}
      </div>
      {isHome ? null : (
        <footer className="flex h-[60px] items-center justify-end gap-8 bg-[#f7f7f9] pr-8">
          <LinkItem className="flex text-base" href="/premier">
            <p>게시판</p>
            <IconChevronRight />
          </LinkItem>
          <LinkItem className="flex text-base" href="/premier/rank">
            <p>순위보기</p>
            <IconChevronRight />
          </LinkItem>
        </footer>
      )}
    </div>
  );
}
