import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import Result from '@/components/result/result';

export default function LaligaResultPage() {
  return (
    <Box>
      <BoxHeading hTagType="h2">라리가 일정 및 결과</BoxHeading>
      <Result />
    </Box>
  );
}
