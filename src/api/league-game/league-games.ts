import { instance } from '@/utils/intance';

const ENDPOINT = '/leagueGame';

export async function getLeagueGameByLeagueGameId(leagueGameId: number) {
  const { data } = await instance.get(`${ENDPOINT}/${leagueGameId}`);

  return data;
}

export async function getLeagueGameByYearMonth(leagueId: number, yearMonth: string) {
  const { data } = await instance.get(`${ENDPOINT}/${leagueId}/${yearMonth}`);

  return data;
}

export async function getLeagueGameByDate(targetDate: string) {
  const { data } = await instance.get(`${ENDPOINT}/date/${targetDate}`);

  return data;
}

export async function getLeagueGameAll(
  startDate: string,
  endDate: string,
  leagueId: number,
  page?: number,
  size?: number,
) {
  const { data } = await instance.get(`${ENDPOINT}/all`, {
    params: { startDate, endDate, leagueId, page, size },
  });

  return data;
}
