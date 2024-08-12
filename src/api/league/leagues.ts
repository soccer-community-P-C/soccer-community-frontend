import { TAllGameList, TTeamList } from '@/types/leagues';
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
