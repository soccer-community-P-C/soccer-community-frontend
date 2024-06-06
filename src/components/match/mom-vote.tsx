import { twMerge } from 'tailwind-merge';
import { IconArrowNarrowDown, IconArrowNarrowUp } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import MomVoteBestPlayer from '@/components/match/mom-vote-best-player';
import MomVotePlayer from '@/components/match/mom-vote-player';
import { TVoteInfo } from '@/components/match/match-record';

type TVoteInfoFetched = {
  home: TVoteInfo[];
  away: TVoteInfo[];
};

function sortByNumberOfVotes(votes: TVoteInfoFetched) {
  let homeVoteList = [...votes.home];
  let awayVoteList = [...votes.away];

  homeVoteList = homeVoteList.sort((a, b) => b.score - a.score);
  awayVoteList = awayVoteList.sort((a, b) => b.score - a.score);

  return { homeVoteList, awayVoteList };
}

function findBestVote(home: TVoteInfo[], away: TVoteInfo[]) {
  if (home[0].score >= away[0].score) {
    return home[0];
  }

  return away[0];
}

export default function MomVote() {
  const [homeVoteInfoList, setHomeVoteInfoList] = useState<TVoteInfo[]>();
  const [awayVoteInfoList, setAwayVoteInfoList] = useState<TVoteInfo[]>();
  const [bestVoteInfo, setBestVoteInfo] = useState<TVoteInfo>();

  const [totalVote, setTotalVote] = useState(0);

  const [allPlayerIsOpen, setAllPlayerIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/api/vote');
      const data = await response.json();

      if (data) {
        const { homeVoteList, awayVoteList } = sortByNumberOfVotes(data);
        const bestVoteInfo = findBestVote(homeVoteList, awayVoteList);
        setHomeVoteInfoList(homeVoteList);
        setAwayVoteInfoList(awayVoteList);

        setBestVoteInfo(bestVoteInfo);
        setTotalVote(
          homeVoteList.reduce((accumulator, current) => accumulator + current.score, 0) +
            awayVoteList.reduce((accumulator, current) => accumulator + current.score, 0),
        );
      }
    }

    fetchData();
  }, []);

  function handleClickOpen() {
    setAllPlayerIsOpen((prevState) => !prevState);
  }

  return (
    <div className="flex flex-col gap-2 px-4">
      <div className="flex justify-between">
        <strong>MOM 투표</strong>
        <p className="text-xs opacity-60">투표가 완료되었습니다.</p>
      </div>
      <MomVoteBestPlayer bestVoteInfo={bestVoteInfo} totalVote={totalVote} />

      <div className="flex gap-2">
        <ul className="flex w-full flex-col gap-2">
          {homeVoteInfoList
            ? homeVoteInfoList
                .slice(0, allPlayerIsOpen ? homeVoteInfoList.length : 3)
                .map((info) => <MomVotePlayer key={info.id} name={info.name} score={info.score} />)
            : null}
        </ul>
        <ul className="flex w-full flex-col gap-2">
          {awayVoteInfoList
            ? awayVoteInfoList
                .slice(0, allPlayerIsOpen ? awayVoteInfoList.length : 3)
                .map((info) => <MomVotePlayer key={info.id} name={info.name} score={info.score} />)
            : null}
        </ul>
      </div>
      <div className="mx-auto mt-4">
        <button
          className={twMerge(
            'flex h-[40px] items-center rounded-2xl border border-black p-2 hover:bg-gray-100',
            '',
          )}
          onClick={handleClickOpen}
          type="button"
        >
          전체 선수 펼처보기
          {allPlayerIsOpen ? <IconArrowNarrowUp /> : <IconArrowNarrowDown />}
        </button>
      </div>
    </div>
  );
}
