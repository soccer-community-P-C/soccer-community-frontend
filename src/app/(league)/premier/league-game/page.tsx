import BoxHeading from '@/components/common/box-heading';
import Box from '@/components/common/box';
import { SelectedTeamIdContextProvider } from '@/context/selected-team-id-context';
import { LeagueGame } from '@/components/league-game';

export default function PremierLeagueGamePage() {
  return (
    <SelectedTeamIdContextProvider>
      <Box>
        <BoxHeading hTagType="h2">프리미어리그 일정 및 결과</BoxHeading>
        <LeagueGame />
      </Box>
    </SelectedTeamIdContextProvider>
  );
}
