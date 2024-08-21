import BoxHeading from '@/components/common/box-heading';
import useLeagueName from '@/hooks/useLeagueName';
import useLeagueSeason from '@/hooks/use-league-season';
import { leagueNameMapper } from '@/utils/leagueNameMapper';

export default function RankHeader() {
  const leagueName = leagueNameMapper[useLeagueName() as keyof typeof leagueNameMapper];
  const { season } = useLeagueSeason();

  return (
    <BoxHeading hTagType="h2">
      {season}/{season + 1} {leagueName} 순위
    </BoxHeading>
  );
}
