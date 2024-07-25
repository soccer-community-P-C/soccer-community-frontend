import { instance } from '@/api/intance';
import {
  TAllGameList,
  TGameByLeagueGameId,
  TGameListByDate,
  TGameListByLeagueIdYearMonth,
} from '@/types/league-games';

const ENDPOINT = '/leagueGame';

export async function getGameByLeagueGameId(leagueGameId: number) {
  const { data } = await instance.get<TGameByLeagueGameId>(`${ENDPOINT}/${leagueGameId}`);

  return data.response;
}

export async function getGameListByLeagueIdYearMonth(leagueId: number, yearMonth: string) {
  const { data } = await instance.get<TGameListByLeagueIdYearMonth>(
    `${ENDPOINT}/league/${leagueId}/${yearMonth}`,
  );

  return data.responses;
}

export async function getGameListByDate(targetDate: string) {
  const { data } = await instance.get<TGameListByDate>(`${ENDPOINT}/date/${targetDate}`);

  return data.responses;
}

export async function getAllGameList(
  startDate: string,
  endDate: string,
  leagueId: number,
  page?: number,
  size?: number,
) {
  const { data } = await instance.get<TAllGameList>(`${ENDPOINT}/all`, {
    params: { startDate, endDate, leagueId, page, size },
  });

  const { findLeagueGames, totalElements, totalPages } = data;

  return { findLeagueGames, totalElements, totalPages };
}
