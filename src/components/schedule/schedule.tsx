'use client';

import { useEffect, useRef, useState } from 'react';
import { getTodayDate, shortISO, shortISOYearMonth } from '@/utils/date-helper';
import { useGetGameListByLeagueGameIdYearMonth } from '@/api/league-game';
import { GameListService } from '@/components/schedule/service/game-list';
import { LoadingBox } from '@/components/common/loading-spinner';
import Calendar from '@/components/schedule/calendar';
import TeamList from '@/components/schedule/team-list';
import { useGetGameListByTeamIdYearMonth } from '@/api/league-game/use-get-game-list-by-team-year-month';
import { ENTIRE_TEAM_ID } from '@/constants/team-list';
import { useLeagueInfo } from '@/hooks/useLeagueName';
import { TGameListDateRef } from '@/types/schedules';
import ScheduleContent from '@/components/schedule/schedule-content';

const todayDate = getTodayDate();

const gameListService = new GameListService();
const gameListByTeamIdService = new GameListService();

function resetGameList() {
  gameListService.resetGameList();
  gameListByTeamIdService.resetGameList();
}

function isEntireTeamId(teamId: number) {
  // 팀 리스트에서 전체 선택 했는지 여부 확인

  return teamId === ENTIRE_TEAM_ID;
}

export default function Schedule() {
  const [selectedTeamId, setSelectedTeamId] = useState(ENTIRE_TEAM_ID);
  const [selectedYearMonthDate, setSelectedYearMonthDate] = useState(todayDate);
  const { leagueId } = useLeagueInfo({ season: '2024' });
  const scheduleListRef = useRef<TGameListDateRef[]>([]);

  useEffect(() => {
    // 리그 변경시마다 경기일정 초기화
    resetGameList();
  }, [leagueId]);

  const {
    isPending: isPendingGameList,
    data: gameList,
    error: errorGameList,
  } = useGetGameListByLeagueGameIdYearMonth({
    leagueId: leagueId,
    yearMonth: shortISOYearMonth(selectedYearMonthDate),
  });

  const {
    isPending: isPendingGameListByTeamId,
    data: gameListByTeamId,
    error: errorGameListByTeamId,
  } = useGetGameListByTeamIdYearMonth({
    leagueTeamId: selectedTeamId,
    yearMonth: shortISOYearMonth(selectedYearMonthDate),
  });

  if (!gameListByTeamIdService.hasGameList() && gameListByTeamId) {
    gameListByTeamIdService.setGameList(gameListByTeamId);
  }

  if (!gameListService.hasGameList() && gameList) {
    gameListService.setGameList(gameList);
  }

  useEffect(() => {
    // 서버에서 가져온 데이터를 통해 만들어진 경기일정 컴포넌트의 ref를 이용.
    // 오늘 날짜와 경기일정들의 date들을 비교 하여. 가장가까운 ref찾는다.
    // 찾은 ref를 통해 스크롤을 이동시킨다.

    const todayDate = getTodayDate();

    if (selectedYearMonthDate.getMonth() !== todayDate.getMonth()) {
      // 다른 날짜는 굳이 스크롤 할 필요 없어서 바로 리턴.
      return;
    }

    if (scheduleListRef && scheduleListRef.current.length > 0) {
      let targetRef: TGameListDateRef = scheduleListRef.current[0];
      let dateDifference = Number.MAX_SAFE_INTEGER;

      for (let i = 0; i < scheduleListRef.current.length; i++) {
        const currentRef = scheduleListRef.current[i];
        if (currentRef.date === shortISO(todayDate)) {
          // 같은 날짜면 더 볼 필요 없음
          targetRef = currentRef;
          break;
        } else {
          // 같은 날짜가 아니라면 차이가 제일 적은 날짜로 설정.
          const tempDiff = Math.abs(new Date(currentRef.date).getTime() - todayDate.getTime());
          if (dateDifference > tempDiff) {
            targetRef = currentRef;
            dateDifference = tempDiff;
          }
        }
      }
      targetRef.ref?.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // ref 초기화
      scheduleListRef.current = [];
    }
  }, [gameList, gameListByTeamId, selectedYearMonthDate]);

  function handleSelectYearMonth(date: Date) {
    setSelectedYearMonthDate(date);
    resetGameList();
  }

  function handleSelectTeamId(teamId: number) {
    setSelectedTeamId(teamId);
    resetGameList();
  }

  return (
    <>
      <Calendar
        onSelectedYearMonthDate={handleSelectYearMonth}
        selectedYearMonthDate={selectedYearMonthDate}
      />
      <TeamList onSelectedTeamId={handleSelectTeamId} selectedTeamId={selectedTeamId} />
      {isEntireTeamId(selectedTeamId) ? (
        <>
          {isPendingGameList ? <LoadingBox /> : null}
          {errorGameList ? <div>Error</div> : null}
          {gameListService.hasGameList()
            ? gameListService.sortedMonthlyGameList.map(({ games: gameList, date }, index) => (
                <ScheduleContent
                  date={date}
                  gameList={gameList}
                  isHome={false}
                  key={index}
                  ref={(ref) => {
                    ref && scheduleListRef.current.push({ date, ref });
                  }}
                />
              ))
            : null}
        </>
      ) : (
        <>
          {isPendingGameListByTeamId ? <LoadingBox /> : null}
          {errorGameListByTeamId ? <div>Error</div> : null}
          {gameListByTeamIdService.hasGameList()
            ? gameListByTeamIdService.sortedMonthlyGameList.map(
                ({ games: gameList, date }, index) => (
                  <ScheduleContent
                    date={date}
                    gameList={gameList}
                    isHome={false}
                    key={index}
                    ref={(ref) => {
                      ref && scheduleListRef.current.push({ date, ref });
                    }}
                  />
                ),
              )
            : null}
        </>
      )}
    </>
  );
}
