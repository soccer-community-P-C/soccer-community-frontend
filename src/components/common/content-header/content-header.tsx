'use client';

import LeagueTitle from '@/components/common/content-header/league-title';
import LinkItem from '@/components/common/link-item';
import Box from '@/components/common/box';
import useLeagueUrl from '@/hooks/use-league-url';

export default function ContentHeader() {
  const { URL_PLAYER_RANK, URL_RANK, URL_SCHEDULE, URL_POST } = useLeagueUrl();

  return (
    <header>
      <Box>
        <LeagueTitle />
        <hr className="h-0.5 border-0 bg-gray-200 text-xl" />
        <nav className="flex gap-8">
          <LinkItem href={URL_POST}>게시판</LinkItem>
          <LinkItem href={URL_SCHEDULE}>일정 및 결과</LinkItem>
          <LinkItem href={URL_RANK}>팀 순위</LinkItem>
          <LinkItem href={URL_PLAYER_RANK}>선수 순위</LinkItem>
        </nav>
      </Box>
    </header>
  );
}
