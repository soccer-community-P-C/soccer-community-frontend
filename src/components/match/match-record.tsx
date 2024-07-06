import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Box from '@/components/common/box';
import MatchRecordTab from '@/components/match/match-record-tab';
import MatchRecordCategory from '@/components/match/match-record-category';
import MomVote from '@/components/match/mom-vote';
import PlayerRank from '@/components/player-rank/player-rank';

import Chelsea from '@/assets/Chelsea.png';
import MatchSelectTeamButton from '@/components/match/match-select-team-button';
import TableContainer from '@/components/common/table/table-container';

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

  const [isHomeSelect, setIsHomeSelect] = useState(true);

  return (
    <div className="flex flex-col gap-2">
      <Box className="h-full px-0">
        <MatchRecordTab away={away} date={date} home={home} tab={tab} />
        <hr />

        {tab === 'mom' ? <MomVote /> : <MatchRecordCategory />}
      </Box>
      <Box>
        <div>
          <ul className="relative flex overflow-hidden rounded-lg border bg-[#f7f8f9]">
            <li className="relative z-10 min-w-0 flex-1 text-center">
              <MatchSelectTeamButton
                isSelected={isHomeSelect}
                logoSrc={Chelsea}
                onClick={() => setIsHomeSelect(true)}
                team={home}
              />
            </li>
            <li className="relative z-10 min-w-0 flex-1 text-center">
              <MatchSelectTeamButton
                isSelected={!isHomeSelect}
                logoSrc={Chelsea}
                onClick={() => setIsHomeSelect(false)}
                team={away}
              />
            </li>
          </ul>
        </div>
        <TableContainer isMatch={true}>
          <PlayerRank />
        </TableContainer>
      </Box>
    </div>
  );
}
