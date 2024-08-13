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
    <div className="flex-all-center flex w-full">
      <div className="relative flex items-center gap-1">
        <button onClick={() => handleMoveMonth(-1)} type="button">
          <IconChevronLeft />
        </button>
        <time className="text-3xl font-bold leading-[38px]">
          {shortISOYearMonth(selectedYearMonthDate)}
        </time>
        <Button className="absolute right-[200px]" onClick={handleMoveToday}>
          오늘
        </Button>
        <button onClick={() => handleMoveMonth(1)} type="button">
          <IconChevronRight />
        </button>
      </div>
    </div>
  );
}
