import { IconChevronRight } from '@tabler/icons-react';
import LinkItem from '@/components/common/link-item';
import ResultOfGameItem from '@/components/result/result-of-game-item';
import BoxHeading from '@/components/common/box-heading';
import { getDateTitle } from '@/utils/date-helper';
import { TResultOfGame } from '@/types/result-of-game-type';

type ResultOfGameProps = {
  selectedDate: Date;
  gameList: TResultOfGame[];
};

export default function ResultOfGame({ selectedDate, gameList }: ResultOfGameProps) {
  const dateTitle = getDateTitle(selectedDate);
  return (
    <div className="divide-y divide-[#777784] overflow-hidden rounded-md border border-[#777784] shadow">
      <BoxHeading className="flex h-[60px] items-center bg-[#f7f7f9] pl-4" hTagType="h3">
        {dateTitle}
      </BoxHeading>
      <div className="items-center divide-y divide-[#777784] text-lg">
        {gameList.length > 0 ? (
          gameList.map(({ homeTeamName, homeScore, awayScore, awayTeamName }, index) => (
            <ResultOfGameItem
              away={awayTeamName}
              awayScore={awayScore}
              date={selectedDate}
              home={homeTeamName}
              homeScore={homeScore}
              key={index}
            />
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>

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
    </div>
  );
}
