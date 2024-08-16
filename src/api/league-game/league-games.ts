import { instance } from '@/api/intance';
import {
  TGameByLeagueGameId,
  TGameListByDate,
  TGameListByLeagueIdYearMonth,
  TGameListByLeagueTeamId,
} from '@/types/schedules';
import { GetGameByLeagueGameIdProps } from '@/api/league-game/use-get-game-by-league-game-id';
import { GetGameListByLeagueGameIdYearMonthProps } from '@/api/league-game/use-get-game-list-by-league-game-id-year-month';
import { GetGameListByDateProps } from '@/api/league-game/use-get-game-list-by-date';
import { GetGameListByTeamIdProps } from '@/api/league-game/use-get-game-list-by-team-id';

const ENDPOINT = '/league-game/search';

// 특정 경기 상세 조회
export async function getGameByLeagueGameId({ leagueGameId }: GetGameByLeagueGameIdProps) {
  const { data } = await instance.get<TGameByLeagueGameId>(`${ENDPOINT}/${leagueGameId}`);

  return data.response;
}

// 특정 팀 경기들 조회
export async function getGameByTeamId({
  leagueTeamId,
  size,
  sort,
  page,
}: GetGameListByTeamIdProps) {
  const { data } = await instance.get<TGameListByLeagueTeamId>(`${ENDPOINT}/team/${leagueTeamId}`, {
    params: {
      pageable: {
        page,
        size,
        sort,
      },
    },
  });

  const { findLeagueGames, totalElements, totalPages } = data;

  return { findLeagueGames, totalElements, totalPages };
}

// 특정 년월 경기들 조회
export async function getGameListByLeagueIdYearMonth({
  leagueId,
  yearMonth,
}: GetGameListByLeagueGameIdYearMonthProps) {
  const { data } = await instance.get<TGameListByLeagueIdYearMonth>(
    `${ENDPOINT}/${leagueId}/${yearMonth}`,
  );

  return data.responses;
}

// 특정 날짜 경기 조회하기
export async function getGameListByDate({ targetDate }: GetGameListByDateProps) {
  const { data } = await instance.get<TGameListByDate>(`${ENDPOINT}/date/${targetDate}`);

  return data.responses;
}
