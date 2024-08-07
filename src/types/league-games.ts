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
};

export type TGameDetails = {
  gameDate: string;
  count: number;
  away: string;
  home: string;
  homeScore: string;
  awayScore: string;
  leagueGameStatus: string;
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

export type TAllGameList = {
  findLeagueGames: {
    leagueGameId: number;
    gameDate: string;
    count: number;
    away: string;
    home: string;
    score: {
      homeScore: string;
      awayScore: string;
    };
    leagueGameStatus: string;
    homePlayers:
      | {
          LeagueGamePlayerId: number;
          status: string;
          playedTime: number;
          subTime: number;
          position: string;
          player: {
            playerId: number;
            national: string;
            playerName: string;
            position: string;
            leagueTeam: {
              leagueTeamId: number;
              leagueTeamName: string;
              teamType: string;
              league: string;
              season: string;
              logo: string;
            };
            birth: string;
            season: string;
          };
        }[]
      | null;
    awayPlayers:
      | {
          LeagueGamePlayerId: number;
          status: string;
          playedTime: number;
          subTime: number;
          position: string;
          player: {
            playerId: number;
            national: string;
            playerName: string;
            position: string;
            leagueTeam: {
              leagueTeamId: number;
              leagueTeamName: string;
              teamType: string;
              league: string;
              season: string;
              logo: string;
            };
            birth: string;
            season: string;
          };
        }[]
      | null;
  }[];

  totalElements: number;
  totalPages: number;
};

export type TGameListByLeagueTeamId = TAllGameList;
