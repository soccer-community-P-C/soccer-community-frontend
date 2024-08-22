import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Button from '@/components/common/button';
import { getTodayDate, shortISOYearMonth } from '@/utils/date-helper';

type CalendarProps = {
  onSelectedYearMonthDate: (date: Date) => void;
  selectedYearMonthDate: Date;
};

export default function Calendar({
  onSelectedYearMonthDate,
  selectedYearMonthDate,
}: CalendarProps) {
  function handleMoveMonth(month: number) {
    const newDate = new Date(selectedYearMonthDate);

    newDate.setMonth(newDate.getMonth() + month);
    onSelectedYearMonthDate(newDate);
  }

  function handleMoveToday() {
    const todayDate = getTodayDate();

    onSelectedYearMonthDate(todayDate);
  }

  return (
    <div className="flex-all-center relative w-full flex-col sm:flex-row">
      <div className="flex items-center gap-1">
        <button onClick={() => handleMoveMonth(-1)} type="button">
          <IconChevronLeft />
        </button>
        <time className="text-xl font-bold leading-[38px] sm:text-3xl">
          {shortISOYearMonth(selectedYearMonthDate)}
        </time>
        <button onClick={() => handleMoveMonth(1)} type="button">
          <IconChevronRight />
        </button>
      </div>
      <Button className="right-0 sm:absolute" onClick={handleMoveToday}>
        오늘
      </Button>
    </div>
  );
}
