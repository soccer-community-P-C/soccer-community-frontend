import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react';
import Button from '@/components/common/button';
import { shortISO, TDate } from '@/utils/date-helper';

type DatePickerProps = {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  onMoveDate: (daysToAdd: number) => void;
  dateList: TDate[];
};

export default function DatePicker({
  onMoveDate,
  dateList,
  selectedDate,
  onSelectDate,
}: DatePickerProps) {
  function handleClickMoveDate(daysToAdd: number) {
    onMoveDate(daysToAdd);
  }

  return (
    <nav className="flex justify-center gap-4">
      <Button onClick={() => handleClickMoveDate(-5)}>
        <IconCaretLeftFilled className="h-4 w-4" />
      </Button>

      {dateList.map((dateObj, index) => {
        const shortDate = shortISO(dateObj.date);
        if (shortISO(dateObj.date) === shortISO(selectedDate)) {
          // Todo
          return (
            <Button
              className="bg-gray-900 text-white hover:bg-gray-900 hover:text-white"
              key={index}
            >
              {shortDate} ({dateObj.dayOfWeek})
            </Button>
          );
        }

        return (
          <Button key={index} onClick={() => onSelectDate(dateObj.date)}>
            {shortDate} ({dateObj.dayOfWeek})
          </Button>
        );
      })}

      <Button onClick={() => handleClickMoveDate(5)}>
        <IconCaretRightFilled className="h-4 w-4" />
      </Button>
    </nav>
  );
}
