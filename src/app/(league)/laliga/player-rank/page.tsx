import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import PlayerRankTable from '@/components/player-rank/player-rank-table';
import TableContainer from '@/components/common/table/table-container';

export default function PlayerRankPage() {
  return (
    <Box>
      <BoxHeading hTagType="h2">23/24 라리가 선수 순위</BoxHeading>
      <TableContainer>
        <PlayerRankTable />
      </TableContainer>
    </Box>
  );
}
