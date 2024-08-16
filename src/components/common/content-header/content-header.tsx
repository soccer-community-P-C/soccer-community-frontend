'use client';

import LeagueTitle from '@/components/common/content-header/league-title';
import LinkItem from '@/components/common/link-item';
import Box from '@/components/common/box';
import useAllUrls from '@/hooks/use-all-urls';

export default function ContentHeader() {
  const { URL_PLAYER_RANK, URL_RANK, URL_SCHEDULE } = useAllUrls();

  return (
    <header>
      <Box className="sm-in:gap-4">
        <LeagueTitle />
        <hr className="h-0.5 border-0 bg-gray-200 text-xl" />
        <nav className="flex gap-4 sm:gap-8">
          <LinkItem href={URL_SCHEDULE}>일정 및 결과</LinkItem>
          <LinkItem href={URL_RANK}>팀 순위</LinkItem>
          <LinkItem href={URL_PLAYER_RANK}>선수 순위</LinkItem>
        </nav>
      </Box>
    </header>
  );
}
