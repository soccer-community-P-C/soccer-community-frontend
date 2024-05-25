import { IconChevronRight } from '@tabler/icons-react';
import LinkItem from '@/components/common/linkItem';
import ResultOfGameItem from '@/components/result/result-of-game-item';
import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import { dayOfWeekMapper, shortISO } from '@/utils/date-helper';

type ResultOfGameProps = {
  selectedDate: Date;
};

function getDateTitle(date: Date) {
  const dayOfWeek = dayOfWeekMapper[date.getDay()];
  const shortDate = shortISO(date);

  const [, month, day] = shortDate.split('-').map((elem) => String(Number(elem)));

  return `${month}월 ${day}일 ${dayOfWeek}요일`;
}

export default function ResultOfGame({ selectedDate }: ResultOfGameProps) {
  const dateTitle = getDateTitle(selectedDate);

  return (
    <Box isSub={true}>
      <BoxHeading hTagType="h3">{dateTitle}</BoxHeading>
      <div className="items-center divide-y divide-[#777784] rounded-md border border-[#777784] text-lg">
        <ResultOfGameItem away="에버튼" home="첼시" score="2 - 2" />
        <ResultOfGameItem away="맨유" home="맨시티" score="1 - 1" />
      </div>

      <footer className="flex justify-end gap-8">
        <LinkItem className="flex text-base" href="/premier">
          <p>게시판</p>
          <IconChevronRight />
        </LinkItem>
        <LinkItem className="flex text-base" href="/premier/rank">
          <p>순위보기</p>
          <IconChevronRight />
        </LinkItem>
      </footer>
    </Box>
  );
}
