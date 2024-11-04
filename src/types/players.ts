export type TPlayerId = { playerId: number };

export type TPlayerInfo = {
  playerId: number;
  national: string;
  playerName: string;
  position: string;
  leagueTeamName: string;
  leagueTeamId: number;
  profileImage: string;
};

// /api/player/search

export type TGetAllPlayerList = {
  apiResponseList: TPlayerInfo[];
};

// /api/player/search/{playerId}

export type TGetPlayer = TPlayerInfo;

type TCommentInfo = {
  comment: string;
  createdAt: string;
  nickName: string;
  memberId: number;
};

// /api/player/comment/search/{playerId}
export type TGetPlayerCommentList = {
  playerComments: TCommentInfo[];
};

// /api/player/comsment/{playerId}
export type TWritePlayerComment = TPlayerId & {
  comment: string;
};
