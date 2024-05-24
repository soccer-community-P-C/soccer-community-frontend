import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react';
import Button from '@/components/Common/Button';
import { TDay } from '@/utils/date-helper';

type DatePickerProps = {
  selectedDay: string;
  onSelectDay: (day: string) => void;
  onMoveDay: (daysToAdd: number) => void;
  dayList: TDay[];
};

export default function DatePicker({
  onMoveDay,
  dayList,
  selectedDay,
  onSelectDay,
}: DatePickerProps) {
  function handleClickMoveDay(daysToAdd: number) {
    onMoveDay(daysToAdd);
  }

  return (
    <nav className="flex justify-center gap-4">
      <Button onClick={() => handleClickMoveDay(-5)}>
        <IconCaretLeftFilled className="h-4 w-4" />
      </Button>

      {dayList.map((day) => {
        if (day.day === selectedDay) {
          return (
            <Button
              className="bg-gray-900 text-white hover:bg-gray-900 hover:text-white"
              key={day.day}
            >
              {day.day} ({day.dayOfWeek})
            </Button>
          );
        }

        return (
          <Button key={day.day} onClick={() => onSelectDay(day.day)}>
            {day.day} ({day.dayOfWeek})
          </Button>
        );
      })}

      <Button onClick={() => handleClickMoveDay(5)}>
        <IconCaretRightFilled className="h-4 w-4" />
      </Button>
    </nav>
  );
}
