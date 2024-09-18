import BoxHeading from '@/components/common/box-heading';
import Box from '@/components/common/box';
import Schedule from '@/components/schedule/schedule';

export default function PremierSchedulePage() {
  return (
    <Box className="relative sm-in:gap-2">
      <BoxHeading hTagType="h2">프리미어리그 일정 및 결과</BoxHeading>
      <Schedule />
    </Box>
  );
}
