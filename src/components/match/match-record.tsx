import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Box from '@/components/common/box';
import MatchRecordTab from '@/components/match/match-record-tab';
import MatchRecordCategory from '@/components/match/match-record-category';
import MomVote from '@/components/match/mom-vote';
import PlayerRankTable from '@/components/player-rank/player-rank-table';

import Chelsea from '@/assets/Chelsea.png';
import MatchSelectTeamButton from '@/components/match/match-select-team-button';
import TableContainer from '@/components/common/table/table-container';
import { TGameDetails } from '@/types/schedules';
import OpenTalk from '@/components/match/open-talk';
import useWindowSize from '@/hooks/use-window-size';

export type TVoteInfo = {
  id: string;
  name: string;
  score: number;
};

type MatchRecordProps = TGameDetails;

const tabMapper = {
  mom: <MomVote />,
  schedule: <MatchRecordCategory />,
  talk: (
    <div className="">
      <OpenTalk />
    </div>
  ),
};

export default function MatchRecord({ home, away }: MatchRecordProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { width } = useWindowSize();
  const tab = searchParams.get('tab') || 'schedule';

  const [isHomeSelect, setIsHomeSelect] = useState(true);

  useEffect(() => {
    // xl 사이즈 넘어가면 aside에 오픈톡컴포넌트가 생기도록 구현(트릭)
    // 오픈톡 컴포넌트가 두개 생기는 상황이라 렌더링에 악영향이 있을 듯.
    // Todo: xl 사이즈 미만에서는 openTalk을 없애거나 팝업으로 구현하는걸 고려 (네이버는 아에 없앰)

    if (width && width > 1024 && tab !== 'mom') {
      const params = new URLSearchParams(searchParams.toString());
      params.set('tab', 'schedule');
      router.push(pathname + '?' + params.toString());
    }
  }, [width, pathname, router, searchParams, tab]);

  return (
    <>
      <Box className="h-full px-0 sm:gap-4">
        <MatchRecordTab tab={tab} />
        <hr />
        {tabMapper[tab as keyof typeof tabMapper]}
      </Box>
      <Box>
        <ul className="relative flex overflow-hidden rounded-lg border bg-hover">
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
          <PlayerRankTable isMatch={true} />
        </TableContainer>
      </Box>
    </>
  );
}
