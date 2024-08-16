'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import ScrollButton from '@/components/common/scroll-button';
import { useGetTeamList } from '@/api/league';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import TeamLogo from '@/components/schedule/team-logo';
import useLeagueName from '@/hooks/useLeagueName';

type TeamListProps = {
  onSelectedTeamId: (teamId: number) => void;
  selectedTeamId: number;
};

export default function TeamList({ onSelectedTeamId, selectedTeamId }: TeamListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const leagueName = useLeagueName();

  let leagueId = 1;

  if (leagueName === 'laliga') {
    leagueId = 2;
  }

  const { isPending, data: teamList, error } = useGetTeamList({ years: '2023', leagueId });

  const checkScroll = useCallback(() => {
    const container = containerRef.current;

    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll(); // 초기 상태 확인

      // 윈도우 리사이즈 이벤트 리스너 추가
      window.addEventListener('resize', checkScroll);
    }

    // 클린업 함수
    return () => {
      container?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll, isPending]);

  function handleMoveScroll(direction: 'left' | 'right') {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth / 2;
      const targetScroll =
        direction === 'right'
          ? container.scrollLeft + scrollAmount
          : container.scrollLeft - scrollAmount;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });

      setTimeout(checkScroll, 500);
    }
  }

  return (
    <div className="relative overflow-hidden rounded-md border border-[#777784] bg-[#f7f7f9]">
      <div
        className="flex divide-x divide-[#777784] overflow-x-hidden scroll-smooth"
        ref={containerRef}
      >
        {isPending ? (
          <div className="mx-auto my-2">
            <LoadingSpinner />
          </div>
        ) : null}
        {error ? <div>팀 리스트 가져오기 실패</div> : null}
        {teamList
          ? teamList.map((team) => (
              <div className="w-1/10 flex-shrink-0" key={team.leagueTeamId}>
                <TeamLogo
                  logo={team.logo}
                  name={team.leagueTeamName}
                  onSelectedTeamId={onSelectedTeamId}
                  selectedTeamId={selectedTeamId}
                  teamId={team.leagueTeamId}
                />
              </div>
            ))
          : null}
      </div>

      {showLeftArrow ? (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
          <ScrollButton direction="left" onClick={() => handleMoveScroll('left')} />
        </div>
      ) : null}
      {showRightArrow ? (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
          <ScrollButton direction="right" onClick={() => handleMoveScroll('right')} />
        </div>
      ) : null}
    </div>
  );
}