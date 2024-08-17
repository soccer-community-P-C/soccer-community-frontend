import { TGameListWithDate } from '@/types/schedules';

type TDateComparable = {
  date: string;
};

function compareDates(a: TDateComparable, b: TDateComparable) {
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

  hasGameList() {
    return this.gameList.length > 0;
  }

  get sortedMonthlyGameList() {
    return this.sortedGameList;
  }

  resetGameList() {
    this.gameList = [];
    this.sortedGameList = [];
  }
}
