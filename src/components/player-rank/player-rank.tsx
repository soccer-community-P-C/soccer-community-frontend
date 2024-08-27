'use client';

import BoxHeading from '@/components/common/box-heading';
import TableContainer from '@/components/common/table/table-container';
import PlayerRankTable from '@/components/player-rank/player-rank-table';
import useLeagueName from '@/hooks/useLeagueName';
import useLeagueSeason from '@/hooks/use-league-season';
import { leagueNameMapper } from '@/utils/league-mapper';

export default function PlayerRank() {
  const leagueName = leagueNameMapper[useLeagueName() as keyof typeof leagueNameMapper];
  const { season } = useLeagueSeason();

  return (
    <>
      <BoxHeading hTagType="h2">
        {season}/{season + 1} {leagueName} 선수 순위
      </BoxHeading>
      <TableContainer>
        <PlayerRankTable />
      </TableContainer>
    </>
  );
}
