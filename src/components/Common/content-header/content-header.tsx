'use client';

import { usePathname } from 'next/navigation';
import LeagueTitle from '@/components/common/content-header/league-title';
import PremierLogo from '@/assets/img/logo/logo_premier.png';
import LinkItem from '@/components/common/link-item';
import Box from '@/components/common/box';

const leagueMapper: { [key: string]: string } = {
  laliga: '라리가',
  premier: '프리미어리그',
};

export default function ContentHeader() {
  const pathname = usePathname().split('/')[1];

  return (
    <header>
      <Box>
        <LeagueTitle
          alt="프리미어리그 로고"
          logoSrc={PremierLogo.src}
          title={leagueMapper[pathname]}
        />
        <hr className="h-0.5 border-0 bg-gray-200 text-xl" />
        <nav className="flex gap-8">
          <LinkItem href={`/${pathname}/board`}>게시판</LinkItem>
          <LinkItem href={`/${pathname}/result`}>일정 및 결과</LinkItem>
          <LinkItem href={`/${pathname}/rank`}>팀 순위</LinkItem>
          <LinkItem href={`/${pathname}/player/rank`}>선수 순위</LinkItem>
        </nav>
      </Box>
    </header>
  );
}
