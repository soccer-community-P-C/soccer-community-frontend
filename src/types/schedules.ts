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
  plyerId: number;
  playerName: string;
  time: number;
  type: string;
  teamName: string;
  teamId: number;
};

export type TGameDetails = {
  awayScore: string;
  away: string;
  home: string;
  homeScore: string;
  count: number;
  gameDate: string;
  matchDay: number;
  homeLogo: string;
  awayLogo: string;

  leagueGameStatus: string;
  venue: string;
  homePlayers:
    | {
        playerId: number;
        position: string;
        shirtNumber: string;
        playerKrName: string;
        playerEnName: string;
      }[]
    | null;
  awayPlayers:
    | {
        playerId: number;
        position: string;
        shirtNumber: string;
        playerKrName: string;
        playerEnName: string;
      }[]
    | null;
  goals: TGoalInfo[];
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
