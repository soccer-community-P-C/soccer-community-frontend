import { TAllGameList } from '@/types/leagues';

export type TGame = {
  leagueGameId: number;
  date: string;
  homeTeamName: string;
  awayTeamName: string;
  homeScore: string;
  awayScore: string;
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

export type TGameDetails = {
  awayScore: string;
  away: string;
  home: string;
  homeScore: string;
  count: number;
  gameDate: string;
  matchDay: number;

  leagueGameStatus: string;
  venue: string;
  homePlayers:
    | {
        name: string;
        playedTime: number;
        subTime: number;
        position: string;
      }[]
    | null;
  awayPlayers:
    | {
        name: string;
        playedTime: number;
        subTime: number;
        position: string;
      }[]
    | null;
  goals: {
    plyerId: 0;
    playerName: 'string';
    time: 0;
    type: 'string';
  }[];
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
