export type TLeagueGame = {
  date: string;
  homeTeamName: string;
  awayTeamName: string;
  homeScore: string;
  awayScore: string;
  homeLogo: string;
  awayLogo: string;
};

export type TLeagueGameByLeagueId = {
  response: {
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
};

export type TLeagueGameByLeagueIdYearMonth = {
  responses: {
    date: string;
    games: TLeagueGame[];
  }[];
};

export type TLeagueGameByDate = {
  responses: TLeagueGame[];
};
export type TLeagueGameAll = {
  findLeagueGames: [
    {
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
      homePlayers: {
        LeagueGamePlayerId: number;
        status: string;
        playedTime: number;
        subTime: number;
        position: string;
        player:
          | {
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
            }[]
          | null;
      };
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
    },
  ];
  totalElements: number;
  totalPages: number;
};
