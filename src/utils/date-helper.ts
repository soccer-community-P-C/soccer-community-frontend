export function addDate(date: Date, daysToAdd: number) {
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
    const addedDate = addDate(date, i);

    dateList.push({
      dayOfWeek: dayOfWeekMapper[addedDate.getDay()],
      date: addedDate,
    });
  }

  return dateList;
}
