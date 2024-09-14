import { usePathname } from 'next/navigation';

export default function useLeagueName() {
  const pathname = usePathname();
  const leagueName = pathname.split('/')[1];

  return leagueName;
}
