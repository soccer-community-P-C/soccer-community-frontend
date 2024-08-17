type TSortType = 'string' | 'number';

export type GetGameByLeagueGameIdProps = {
  leagueGameId: string | number;
};

export type GetGameListByTeamIdProps = {
  leagueTeamId: number;
  sort?: TSortType[];
  page?: number;
  size?: number;
};

export type GetGameListByDateProps = { targetDate: string };

export type GetGameListByLeagueGameIdYearMonthProps = {
  leagueId: number;
  yearMonth: string;
};

export type GetGameListByTeamIdYearMonthProps = { leagueTeamId: number; yearMonth: string };