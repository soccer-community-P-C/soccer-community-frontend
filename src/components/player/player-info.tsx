import PlayerInfoItem from '@/components/player/player-info-item';
import { TPlayerInfo } from '@/types/players';

type PlayerInfoProps = TPlayerInfo;

export default function PlayerInfo({
  leagueTeamName,
  playerName,
  national,
  position,
}: PlayerInfoProps) {
  // Todo: 팀명 클릭시 팀 상세 조회 페이지로 이동.
  return (
    <div className="mt-[8px] basis-2/5">
      <h4 className="mb-2 max-w-[432px] truncate text-2xl font-semibold">{playerName}</h4>
      <div className="mb-2 overflow-hidden">
        {/*<span className="float-left mr-4 text-lg leading-9">-</span>*/}
        <div className="flex-all-center float-left text-lg leading-9 ">{leagueTeamName}</div>
        {/*<LinkItem*/}
        {/*  className="flex-all-center float-left text-lg leading-9 "*/}
        {/*  href={`#team/${leagueTeamId}`}*/}
        {/*>*/}
        {/*  {leagueTeamName}*/}

        {/*  <IconChevronRight stroke={2} />*/}
        {/*</LinkItem>*/}
      </div>
      <div className="table">
        <div className="float-left pr-[44px]">
          <PlayerInfoItem description="-" title="출생" />
          <PlayerInfoItem description="-" title="키" />
          <PlayerInfoItem description={national} title="국가" />
        </div>
        <div className="float-left pr-[44px]">
          <PlayerInfoItem description={position} title="포지션" />
          {/*<PlayerInfoItem description="-" title="몸무게" />*/}
        </div>
      </div>
    </div>
  );
}
