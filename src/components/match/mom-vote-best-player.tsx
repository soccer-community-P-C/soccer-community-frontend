import { TVoteInfo } from '@/components/match/match-record';

type MomVoteBestPlayerProps = {
  bestVoteInfo: TVoteInfo | undefined;
  totalVote: number;
};
export default function MomVoteBestPlayer({ bestVoteInfo, totalVote }: MomVoteBestPlayerProps) {
  return (
    <div className="rounded-lg bg-gray-600 p-4 text-gray-50">
      <div className="flex items-center">
        <span className="mr-9 h-[50px] w-[50px]" />
        <span className="rounded-xl border border-amber-300 px-2 ">현재 1위</span>
        <strong className="ml-6 text-lg">{bestVoteInfo?.name}</strong>
        <div className="ml-auto">
          <span>
            <span className="text-xs opacity-60">득표수</span> {bestVoteInfo?.score}표
          </span>
          <span className="ml-4">
            <span className="text-xs opacity-60">득표율</span>{' '}
            {(
              (bestVoteInfo?.score ? bestVoteInfo?.score / totalVote : 0 / totalVote) * 100
            ).toFixed()}
            %
          </span>
        </div>
      </div>
    </div>
  );
}
