import { twMerge } from 'tailwind-merge';
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
        className={twMerge('flex h-[50px] items-center bg-[#f7f7f9] pl-4', isHome && 'h-[40px]')}
        hTagType={isHome ? 'h4' : 'h3'}
      >
        {getDateTitle(new Date(date))}
      </BoxHeading>

      <div
        className={twMerge('items-center divide-y divide-[#777784] text-lg', isHome && 'text-base')}
      >
        {gameList.length > 0 ? (
          gameList.map((game) => <LeagueGameContentItem {...game} key={game.leagueGameId} />)
        ) : (
          <div className="p-2">
            <span>오늘은 경기가 없습니다.</span>
          </div>
        )}
      </div>
    </div>
  );
}
