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

export type TTeamInfo = {
  leagueTeamId: number;
  leagueTeamName: string;
  teamType: string;
  leagueName: string;
  logo: string;
};

export type TTeamList = TTeamInfo[];

export type TTeamRank = {
  teamId: number;
  teamName: string;
  season: string;
  rank: number;
  won: number;
  lost: number;
  draw: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
};

export type TTeamRankList = {
  ranks: TTeamRank[];
};
