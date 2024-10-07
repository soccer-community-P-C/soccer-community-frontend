import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import useWindowSize from '@/hooks/use-window-size';
import Box from '@/components/common/box';
import Formation from '@/components/match/formation';
import { TGameDetails } from '@/types/schedules';

export type TVoteInfo = {
  id: string;
  name: string;
  score: number;
};

type MatchRecordProps = TGameDetails;

// const tabMapper = {
//   mom: <MomVote />,
//   schedule: <MatchRecordCategory />,
//   talk: (
//     <div className="">
//       <OpenTalk />
//     </div>
//   ),
// };

export default function MatchRecord({
  homePlayers,
  awayPlayers,
  homeFormation,
  awayFormation,
  homeLogo,
  awayLogo,
}: MatchRecordProps) {
  // Todo: 경기 상세 정보 패스수, 골 수 등등 데이터가 없어서 추후에 적용 필요
  const searchParams = useSearchParams();
  const { width } = useWindowSize();
  const tab = searchParams.get('tab') || 'schedule';

  // const [isHomeSelect, setIsHomeSelect] = useState(true);

  useEffect(() => {
    // xl 사이즈 넘어가면 aside에 오픈톡컴포넌트가 생기도록 구현(트릭)
    // 오픈톡 컴포넌트가 두개 생기는 상황이라 렌더링에 악영향이 있을 듯.
    // Todo: xl 사이즈 미만에서는 openTalk을 없애거나 팝업으로 구현하는걸 고려 (네이버는 아에 없앰)

    if (width && width > 1024 && tab !== 'mom') {
      // 상세 페이지 이동시 웹 환경이면 자동으로 url 파라미터값이 schedule로 설정되는 문제
      // 파라미터를 없애는 방법으로 수정
      history.replaceState({}, '', location.pathname);
    }
  }, [tab, width]);

  return (
    <>
      <Box>
        <Formation
          awayFormation={awayFormation}
          awayLogo={awayLogo}
          awayPlayers={awayPlayers}
          homeFormation={homeFormation}
          homeLogo={homeLogo}
          homePlayers={homePlayers}
        />
      </Box>
      {/*<Box className="h-full px-0 sm:gap-4">*/}
      {/*  <MatchRecordTab tab={tab} />*/}
      {/*  <hr />*/}
      {/*  {tabMapper[tab as keyof typeof tabMapper]}*/}
      {/*</Box>*/}
      {/*<Box>*/}
      {/*  <ul className="relative flex overflow-hidden rounded-lg border bg-hover">*/}
      {/*    <li className="relative z-10 min-w-0 flex-1 text-center">*/}
      {/*      <MatchSelectTeamButton*/}
      {/*        isSelected={isHomeSelect}*/}
      {/*        logoSrc={homeLogo}*/}
      {/*        onClick={() => setIsHomeSelect(true)}*/}
      {/*        team={home}*/}
      {/*      />*/}
      {/*    </li>*/}
      {/*    <li className="relative z-10 min-w-0 flex-1 text-center">*/}
      {/*      <MatchSelectTeamButton*/}
      {/*        isSelected={!isHomeSelect}*/}
      {/*        logoSrc={awayLogo}*/}
      {/*        onClick={() => setIsHomeSelect(false)}*/}
      {/*        team={away}*/}
      {/*      />*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*  <TableContainer isMatch={true}>*/}
      {/*    <PlayerRankTable isMatch={true} />*/}
      {/*  </TableContainer>*/}
      {/*</Box>*/}
    </>
  );
}
