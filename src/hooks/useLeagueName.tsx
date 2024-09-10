import { usePathname } from 'next/navigation';

export default function useLeagueName() {
  const pathname = usePathname();
  const leagueName = pathname.split('/')[1];

  return leagueName;
}

const leagueIdMapper = {
  premier: 1,
  laliga: 2,
};

export function useLeagueId() {
  return leagueIdMapper[useLeagueName() as keyof typeof leagueIdMapper];
}
