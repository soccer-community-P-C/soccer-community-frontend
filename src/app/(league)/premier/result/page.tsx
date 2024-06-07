import BoxHeading from '@/components/common/box-heading';
import Box from '@/components/common/box';
import Result from '@/components/result/result';

export default function PremierResultPage() {
  return (
    <Box>
      <BoxHeading hTagType="h2">프리미어리그 일정 및 결과</BoxHeading>
      <Result />
    </Box>
  );
}
