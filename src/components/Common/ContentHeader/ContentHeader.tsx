import LeagueTitle from '@/components/Common/ContentHeader/LeagueTitle';
import PremierLogo from '@/assets/img/logo/logo_premier.png';
import LinkItem from '@/components/Common/LinkItem';
import Box from '@/components/Common/Box';

export default function ContentHeader() {
  return (
    <Box>
      <LeagueTitle alt="프리미어리그 로고" logoSrc={PremierLogo.src} title="프리미어리그" />
      <hr className="h-0.5 border-0 bg-gray-200 text-xl" />
      <nav className="flex gap-8">
        <LinkItem href="/premier">게시판</LinkItem>
        <LinkItem href="/premier">일정 및 결과</LinkItem>
        <LinkItem href="/premier">순위</LinkItem>
      </nav>
    </Box>
  );
}
