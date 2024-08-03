import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import LeagueGame from '@/components/league-game/league-game';

export default function LaligaLeagueGamePage() {
  return (
    <Box>
      <BoxHeading hTagType="h2">라리가 일정 및 결과</BoxHeading>
      <LeagueGame />
    </Box>
  );
}
