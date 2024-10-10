import { TAllGameList } from '@/types/leagues';

export type TGame = {
  leagueGameId: number;
  date: string;
  homeTeamName: string;
  awayTeamName: string;
  homeScore: string | null;
  awayScore: string | null;
  leagueGameStatus: string;
  homeLogo: string;
  awayLogo: string;
  teamId: {
    homeTeamId: number;
    awayTeamId: number;
  }[];
  venue: string;
  matchDay: number;
};

export type TGoalInfo = {
  playerId: number;
  playerName: string;
  time: number;
  type: string;
  teamName: string;
  teamId: number;
};

export type TGamePlayer = {
  playerId: number;
  position: string;
  shirtNumber: string;
  playerKrName: string;
  playerEnName: string;
};

export type TGameBooking = {
  minute: number;
  leagueTeamId: number;
  playerId: number;
  type: string;
  playerKrName: string;
  playerEnName: string;
  cardType: string | null | undefined;
};

export type TGameSubstitution = {
  minute: number;
  playerOutId: number;
  playerOutName: string;
  playerInId: number;
  playerInName: string;
  substitutionTeam: 'away' | 'home';
};

// 팀 경기 기록(스탯)
export type TGameStatistics = {
  cornerKicks: string;
  freeKicks: string;
  goalKicks: string;
  offsides: string;
  fouls: string;
  ballPossession: string;
  saves: string;
  throwIns: string;
  shots: string;
  shotsOnGoal: string;
  shotsOffGoal: string;
  yellowCards: string;
  yellowRedCards: string;
  redCards: string;
};

export type TGameDetails = {
  gameDate: string;
  matchDay: 0;
  away: string;
  home: string;
  homeScore: string;
  awayScore: string;
  homeFormation: string | null;
  awayFormation: string | null;
  homeLogo: string;
  awayLogo: string;
  leagueGameStatus: string;
  venue: string;

  homePlayers: TGamePlayer[] | null;
  awayPlayers: TGamePlayer[] | null;

  goals: TGoalInfo[];

  minute: number;
  injuryTime: number;

  bookings: TGameBooking[];

  substitutions: TGameSubstitution[];
  homeStatistics: TGameStatistics;
  awayStatistics: TGameStatistics;
};

export type TGameByLeagueGameId = {
  response: TGameDetails;
};

export type TGameListWithDate = { date: string; games: TGame[] };

export type TGameListByLeagueIdYearMonth = {
  responses: TGameListWithDate[];
};

export type TGameListByDate = {
  responses: TGame[];
};

export type TGameListByLeagueTeamId = TAllGameList;

type DivRef = {
  ref: HTMLDivElement | null;
};
type TGameListWithDateResponseDate = Pick<TGameListWithDate, 'date'>;

export type TGameListDateRef = TGameListWithDateResponseDate & DivRef;

export type TScheduleList = {
  responses: TGameListWithDate[];
};
