'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import ScrollButton from '@/components/common/scroll-button';
import { TeamLogo } from '@/components/league-game';

const teams = [
  { teamId: 20, name: '전체', logo: '' },
  { teamId: 0, name: '아스널', logo: 'arsenal.png' },
  { teamId: 1, name: '애스턴 빌라', logo: 'aston-villa.png' },
  { teamId: 2, name: '본머스', logo: 'bournemouth.png' },
  { teamId: 3, name: '브렌트포드', logo: 'brentford.png' },
  { teamId: 4, name: '브라이튼', logo: 'brighton.png' },
  { teamId: 5, name: '번리', logo: 'burnley.png' },
  { teamId: 6, name: '첼시', logo: 'chelsea.png' },
  { teamId: 7, name: '크리스탈 팰리스', logo: 'crystal-palace.png' },
  { teamId: 8, name: '에버턴', logo: 'everton.png' },
  { teamId: 9, name: '풀럼', logo: 'fulham.png' },
  { teamId: 10, name: '리버풀', logo: 'liverpool.png' },
  { teamId: 11, name: '루턴 타운', logo: 'luton-town.png' },
  { teamId: 12, name: '맨체스터 시티', logo: 'manchester-city.png' },
  { teamId: 13, name: '맨체스터 유나이티드', logo: 'manchester-united.png' },
  { teamId: 14, name: '뉴캐슬 유나이티드', logo: 'newcastle-united.png' },
  { teamId: 15, name: '노팅엄 포레스트', logo: 'nottingham-forest.png' },
  { teamId: 16, name: '셰필드 유나이티드', logo: 'sheffield-united.png' },
  { teamId: 17, name: '토트넘 홋스퍼', logo: 'tottenham-hotspur.png' },
  { teamId: 18, name: '웨스트햄 유나이티드', logo: 'west-ham-united.png' },
  { teamId: 19, name: '울버햄튼 원더러스', logo: 'wolverhampton-wanderers.png' },
];

type TeamListProps = {
  onSelectedTeamId: (teamId: number) => void;
  selectedTeamId: number;
};

export default function TeamList({ onSelectedTeamId, selectedTeamId }: TeamListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
  }, [checkScroll]);

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
        {teams.map((team) => (
          <div className="w-1/10 flex-shrink-0" key={team.teamId}>
            <TeamLogo
              // logo={team.logo}
              name={team.name}
              onSelectedTeamId={onSelectedTeamId}
              selectedTeamId={selectedTeamId}
              teamId={team.teamId}
            />
          </div>
        ))}
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
