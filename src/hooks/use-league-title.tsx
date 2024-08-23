import useLeagueName from '@/hooks/useLeagueName';
import premierLogo from '@/assets/img/logo/pl_logo.png';
import laligaLogo from '@/assets/img/logo/laliga_logo.png';

const leagueNameMapper = {
  premier: {
    leagueName: '프리미어리그',
    logoSrc: premierLogo.src,
  },
  laliga: {
    leagueName: '라리가',
    logoSrc: laligaLogo.src,
  },
};

export default function useLeagueTitle() {
  const name = useLeagueName() as keyof typeof leagueNameMapper;

  const { leagueName, logoSrc } = leagueNameMapper[name];

  return { alt: name, leagueName, logoSrc };
}
