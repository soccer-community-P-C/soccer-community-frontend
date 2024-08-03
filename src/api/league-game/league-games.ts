import { instance } from '@/api/intance';
import {
  TAllGameList,
  TGameByLeagueGameId,
  TGameListByDate,
  TGameListByLeagueIdYearMonth,
} from '@/types/league-games';
import { GetGameByLeagueGameIdProps } from '@/api/league-game/use-get-game-by-league-game-id';
import { GetGameListByLeagueGameIdYearMonthProps } from '@/api/league-game/use-get-game-list-by-league-game-id-year-month';
import { GetGameListByDateProps } from '@/api/league-game/use-get-game-list-by-date';
import { GetAllGameList } from '@/api/league-game/use-get-all-game-list';

const ENDPOINT = '/league-game/search';

// 특정 경기 상세 조회
export async function getGameByLeagueGameId({ leagueGameId }: GetGameByLeagueGameIdProps) {
  const { data } = await instance.get<TGameByLeagueGameId>(`${ENDPOINT}/${leagueGameId}`);

  return data.response;
}

// 특정 팀 경기들 조회
export async function getGameByTeamId() {
  //   {
  //   leagueTeamId,
  //   size,
  //   sort,
  //   page,
  // }: GetGameListByTeamIdProps
  // Todo: teamId api 생길시 수정 필요
  const { data } = await instance.get<TGameByLeagueGameId>(`${ENDPOINT}/team/${1}`, {
    params: {
      pageable: {
        page: 0,
        size: 10,
        sort: ['string'],
      },
    },
  });

  return data.response;
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

// 전체 일정 조회 하기
export async function getAllGameList({ startDate, endDate, leagueId, page, size }: GetAllGameList) {
  const { data } = await instance.get<TAllGameList>(`${ENDPOINT}`, {
    params: { startDate, endDate, leagueId, page, size },
  });

  const { findLeagueGames, totalElements, totalPages } = data;

  return { findLeagueGames, totalElements, totalPages };
}
