import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import Schedule from '@/components/schedule/schedule';

export default function LaligaLeagueGamePage() {
  return (
    <Box>
      <BoxHeading hTagType="h2">라리가 일정 및 결과</BoxHeading>
      <Schedule />
    </Box>
  );
}
