import { useSearchParams } from 'next/navigation';
import Box from '@/components/common/box';
import MatchRecordTab from '@/components/match/match-record-tab';
import MatchRecordCategory from '@/components/match/match-record-category';
import MomVote from '@/components/match/mom-vote';
import RankTable from '@/components/rank/rank-table';

export type TVoteInfo = {
  id: string;
  name: string;
  score: number;
};

export default function MatchRecord() {
  const searchParams = useSearchParams();
  const date = searchParams.get('date');
  const teamList = searchParams.get('team')?.split('-');
  const tab = searchParams.get('tab');

  const [home, away] = teamList as string[];

  return (
    <Box className="h-full px-0">
      <MatchRecordTab away={away} date={date} home={home} tab={tab} />
      <hr />

      {tab === 'mom' ? <MomVote /> : <MatchRecordCategory />}
    </Box>
  );
}
