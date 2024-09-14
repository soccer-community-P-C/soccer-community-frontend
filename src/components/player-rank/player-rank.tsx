'use client';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import BoxHeading from '@/components/common/box-heading';
import TableContainer from '@/components/common/table/table-container';
import PlayerRankTable from '@/components/player-rank/player-rank-table';
import useLeagueName from '@/hooks/useLeagueName';
import useLeagueSeason from '@/hooks/use-league-season';
import { leagueNameMapper } from '@/utils/league-mapper';

export default function PlayerRank() {
  const leagueName = leagueNameMapper[useLeagueName() as keyof typeof leagueNameMapper];
  const { season, setSeason } = useLeagueSeason();
  const { season: currentSeason } = useLeagueSeason();

  function handleSelectSeason(year: number) {
    setSeason((prevState) => prevState + year);
  }

  return (
    <>
      <BoxHeading hTagType="h2">
        <span className={`${season === 23 ? 'mr-[24px]' : ''}`}>{leagueName} 순위</span>

        {season === 23 ? null : (
          <button onClick={() => handleSelectSeason(-1)} type="button">
            <IconChevronLeft />
          </button>
        )}
        <span>
          {season}/{season + 1}
        </span>
        {season === currentSeason ? null : (
          <button onClick={() => handleSelectSeason(1)} type="button">
            <IconChevronRight />
          </button>
        )}
      </BoxHeading>
      <TableContainer>
        <PlayerRankTable />
      </TableContainer>
    </>
  );
}
