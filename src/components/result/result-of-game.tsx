import { IconChevronRight } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';
import LinkItem from '@/components/common/link-item';
import ResultOfGameItem from '@/components/result/result-of-game-item';
import BoxHeading from '@/components/common/box-heading';
import { getDateTitle, shortISO } from '@/utils/date-helper';
import { TResultOfGame } from '@/types/result-of-game-type';

type ResultOfGameProps = {
  selectedDate: Date;
  gameList: TResultOfGame[];
  isHome?: boolean; // 홈페이지에서 사용하는 컴포넌트인지?
};

export default function ResultOfGame({
  selectedDate,
  gameList,
  isHome = false,
}: ResultOfGameProps) {
  const dateTitle = getDateTitle(selectedDate);
  return (
    <div className="divide-y divide-[#777784] overflow-hidden rounded-md border border-[#777784] shadow">
      <BoxHeading
        className={twMerge('flex h-[60px] items-center bg-[#f7f7f9] pl-4', isHome && 'h-[40px]')}
        hTagType={isHome ? 'h4' : 'h3'}
      >
        {dateTitle}
      </BoxHeading>

      <div
        className={twMerge('items-center divide-y divide-[#777784] text-lg', isHome && 'text-base')}
      >
        {gameList.length > 0 ? (
          gameList.map(({ homeTeamName, homeScore, awayScore, awayTeamName }, index) => (
            <ResultOfGameItem
              awayScore={awayScore}
              awayTeamName={awayTeamName}
              date={shortISO(selectedDate)}
              homeScore={homeScore}
              homeTeamName={homeTeamName}
              key={index}
            />
          ))
        ) : (
          <div>No Data</div>
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
