// 월 단위 경기 일정 정보 리스트를 받아 관련 정보를 반환하는 Class

import { TGameListWithDate } from '@/types/league-games';
import { makeDayObject, shortISO, TDate } from '@/utils/date-helper';

function compareDates(a: TGameListWithDate, b: TGameListWithDate) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  return dateA.getTime() - dateB.getTime();
}

export class GameListService {
  private gameList: TGameListWithDate[];
  private sortedGameList: TGameListWithDate[] = [];

  constructor() {
    this.gameList = [];
  }

  private sortGameList() {
    if (this.gameList) {
      this.sortedGameList = [...this.gameList].sort(compareDates);
    }
  }

  setGameList(gameList: TGameListWithDate[]) {
    this.gameList = gameList;

    this.sortGameList();
  }

  getGameListOfDay(targetDate: Date) {
    // 특정 날짜의 경기 일정을 불러오는 함수
    // targetDate : "2024-02-01" 형식의 문자열을 인수로 받는다.

    for (const element of this.sortedGameList) {
      if (element.date === shortISO(targetDate)) {
        return element.games;
      }
    }
    return [];
  }

  hasGameList() {
    return this.gameList.length > 0;
  }

  get dateList() {
    const list: TDate[] = [];

    for (const element of this.sortedGameList) {
      list.push(makeDayObject(element.date));
    }

    return list;
  }

  get firstDate() {
    if (this.hasGameList()) {
      return new Date(this.sortedGameList[0].date);
    }
  }

  get lastDate() {
    if (this.hasGameList()) {
      return new Date(this.sortedGameList[-1].date);
    }
  }

  get monthlyGameList() {
    return this.gameList;
  }

  get sortedMonthlyGameList() {
    return this.sortedGameList;
  }

  resetGameList() {
    this.gameList = [];
    this.sortedGameList = [];
  }
}
