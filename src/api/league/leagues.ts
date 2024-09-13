import { TAllGameList, TAllLeague, TLeagueInfo, TTeamList, TTeamRankList } from '@/types/leagues';
import { instance } from '@/api/intance';

const ENDPOINT = '/league';

export type GetAllGameListProps = {
  startDate: string;
  endDate: string;
  leagueId: number;
  page?: number;
  size?: number;
};

// 전체 일정 조회 하기
export async function getAllGameList({
  startDate,
  endDate,
  leagueId,
  page,
  size,
}: GetAllGameListProps) {
  const { data } = await instance.get<TAllGameList>(`${ENDPOINT}`, {
    params: { startDate, endDate, leagueId, page, size },
  });

  const { findLeagueGames, totalElements, totalPages } = data;

  return { findLeagueGames, totalElements, totalPages };
}

export type GetTeamListProps = {
  years: string;
  leagueId: number;
};

// 팀 리스트 조회
export async function getTeamList({ years, leagueId }: GetTeamListProps) {
  const { data } = await instance.get<TTeamList>(`${ENDPOINT}/${years}/${leagueId}`);

  return data;
}

export type GetTeamRankListProps = {
  season: string; // 2023
  matchDay?: number;
  leagueId: number;
};

// 팀 랭크 조회
export async function getTeamRankList({ leagueId, season, matchDay }: GetTeamRankListProps) {
  const { data } = await instance.get<TTeamRankList>(`${ENDPOINT}/rank/${leagueId}`, {
    params: { season, matchDay },
  });

  return data;
}

// 리그 조회
export async function getAllLeague() {
  const { data } = await instance.get<TAllLeague[]>(`${ENDPOINT}/all`);

  return data;
}

export type GetLeagueProps = {
  season: string; // 2024
  competition: 'PL' | 'LALIGA' | 'LEAGUE1' | 'BUNDESLIGA';
};

// 리그 조회 상세
export async function getLeague({ season, competition }: GetLeagueProps) {
  const { data } = await instance.get<TLeagueInfo[]>(`${ENDPOINT}`, {
    params: { season, competition },
  });

  return data;
}
