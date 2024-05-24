import { IconChevronRight } from '@tabler/icons-react';
import LinkItem from '@/components/common/linkItem';
import ResultOfGameItem from '@/components/result/result-of-game-item';
import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import { dayOfWeekMapper } from '@/utils/date-helper';

type ResultOfGameProps = {
  selectedDay: string;
};

function getDayTitle(day: string) {
  const dayOfWeek = dayOfWeekMapper[new Date(day).getDay()];
  let month = day.split('-')[1];
  let d = day.split('-')[2];

  if (month[0] === '0') {
    month = month[1];
  }

  if (d[0] === '0') {
    d = d[1];
  }

  return { month, d, dayOfWeek };
}

export default function ResultOfGame({ selectedDay }: ResultOfGameProps) {
  const { month, d, dayOfWeek } = getDayTitle(selectedDay);

  return (
    <Box>
      <BoxHeading hTagType="h3">
        {month}월 {d}일 {dayOfWeek}요일
      </BoxHeading>
      <div className="items-center divide-y-2 divide-slate-200 rounded-md border-2 text-lg">
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
