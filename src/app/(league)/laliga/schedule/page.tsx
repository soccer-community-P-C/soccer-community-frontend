import BoxHeading from '@/components/common/box-heading';
import Box from '@/components/common/box';
import Schedule from '@/components/schedule/schedule';

export default function LaligaSchedulePage() {
  return (
    <Box>
      <BoxHeading hTagType="h2">라리가 일정 및 결과</BoxHeading>
      <Schedule />
    </Box>
  );
}
