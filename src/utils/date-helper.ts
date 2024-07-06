export function addDays(date: Date, daysToAdd: number) {
  const cloneDate = new Date(date.getTime());

  cloneDate.setDate(cloneDate.getDate() + daysToAdd);
  return cloneDate;
}

export function getTodayDate() {
  // 현재 날짜 구하는 함수
  return new Date();
}

export function shortISO(date: Date) {
  return date.toISOString().split('T')[0];
}

export type TDate = { dayOfWeek: (typeof dayOfWeekMapper)[number]; date: Date };

export const dayOfWeekMapper = ['일', '월', '화', '수', '목', '금', '토'] as const;

export function getFiveDate(date: Date) {
  // 오늘 날짜 기준 -2 ~ +2 날짜 구하는 함수
  // const days: { [key: string]: string } = {};
  const dateList: TDate[] = [];

  for (let i = -2; i < 3; i++) {
    const addedDate = addDays(date, i);

    dateList.push({
      dayOfWeek: dayOfWeekMapper[addedDate.getDay()],
      date: addedDate,
    });
  }

  return dateList;
}

export function getDateTitle(date: Date) {
  const dayOfWeek = dayOfWeekMapper[date.getDay()];
  const shortDate = shortISO(date);

  const [, month, day] = shortDate.split('-').map((elem) => String(Number(elem)));

  return `${month}월 ${day}일 ${dayOfWeek}요일`;
}
