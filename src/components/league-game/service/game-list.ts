import { shortISO, makeDayObject } from '@/utils/date-helper';
import { TGameListWithDate } from '@/types/league-games';

type TDateComparable = {
  date: string;
};

function compareDates<T extends TDateComparable>(a: T, b: T) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA.getTime() - dateB.getTime();
}

export class GameListService<T extends TGameListWithDate> {
  private gameList: T[];
  private sortedGameList: T[] = [];

  constructor() {
    this.gameList = [];
  }

  private sortGameList() {
    if (this.gameList) {
      this.sortedGameList = [...this.gameList].sort(compareDates);
    }
  }

  setGameList(gameList: T[]) {
    this.gameList = gameList;
    this.sortGameList();
  }

  getGameListOfDay(targetDate: Date) {
    const targetDateString = shortISO(targetDate);
    return this.sortedGameList.find((element) => element.date === targetDateString)?.games || [];
  }

  hasGameList() {
    return this.gameList.length > 0;
  }

  get dateList() {
    return this.sortedGameList.map((element) => makeDayObject(element.date));
  }

  get firstDate() {
    return this.hasGameList() ? new Date(this.sortedGameList[0].date) : undefined;
  }

  get lastDate() {
    return this.hasGameList()
      ? new Date(this.sortedGameList[this.sortedGameList.length - 1].date)
      : undefined;
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
