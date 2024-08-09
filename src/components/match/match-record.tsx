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
import { TGameDetails } from '@/types/league-games';

export type TVoteInfo = {
  id: string;
  name: string;
  score: number;
};

type MatchRecordProps = TGameDetails;

export default function MatchRecord({ home, away }: MatchRecordProps) {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'league-game';

  const [isHomeSelect, setIsHomeSelect] = useState(true);

  return (
    <div className="flex flex-col gap-2">
      <Box className="h-full px-0">
        <MatchRecordTab tab={tab} />
        <hr />
        {tab === 'mom' ? <MomVote /> : <MatchRecordCategory />}
      </Box>
      <Box>
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
        <TableContainer isMatch={true}>
          <PlayerRank />
        </TableContainer>
      </Box>
    </div>
  );
}
