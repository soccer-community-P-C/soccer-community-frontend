import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import BoxHeading from '@/components/common/box-heading';
import useLeagueName from '@/hooks/useLeagueName';
import { leagueNameMapper } from '@/utils/league-mapper';
import useLeagueSeason from '@/hooks/use-league-season';

type RankHeaderProps = {
  season: number;
  onSelectSeason: (year: number) => void;
};

export default function RankHeader({ season, onSelectSeason }: RankHeaderProps) {
  const { season: currentSeason } = useLeagueSeason();
  const leagueName = leagueNameMapper[useLeagueName() as keyof typeof leagueNameMapper];

  return (
    <BoxHeading hTagType="h2">
      <span className={`${season === 23 ? 'mr-[24px]' : ''}`}>{leagueName} 순위</span>

      {season === 23 ? null : (
        <button onClick={() => onSelectSeason(-1)} type="button">
          <IconChevronLeft />
        </button>
      )}
      <span>
        {season}/{season + 1}
      </span>
      {season === currentSeason ? null : (
        <button onClick={() => onSelectSeason(1)} type="button">
          <IconChevronRight />
        </button>
      )}
    </BoxHeading>
  );
}
