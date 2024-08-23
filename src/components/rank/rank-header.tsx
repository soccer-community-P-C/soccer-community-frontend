import BoxHeading from '@/components/common/box-heading';
import useLeagueName from '@/hooks/useLeagueName';
import { leagueNameMapper } from '@/utils/leagueMapper';

type RankHeaderProps = {
  season: number;
};

export default function RankHeader({ season }: RankHeaderProps) {
  const leagueName = leagueNameMapper[useLeagueName() as keyof typeof leagueNameMapper];

  return (
    <BoxHeading hTagType="h2">
      {season}/{season + 1} {leagueName} 순위
    </BoxHeading>
  );
}
