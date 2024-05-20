import Box from '@/components/Common/Box';
import DatePicker from '@/components/Result/DatePicker';
import ResultOfGame from '@/components/Result/ResultOfGame';

export default function Result() {
  return (
    <Box>
      <h2 className="text-3xl text-gray-600">프리미어리그 일정 및 결과</h2>
      <DatePicker />
      <Box>
        <ResultOfGame />
      </Box>
    </Box>
  );
}
