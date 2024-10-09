'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import noImage from '@/assets/img/no-image.png';
// import player_img from '@/assets/img/player_test_img.jpeg';
import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import PlayerInfo from '@/components/player/player-info';
import PlayerStat from '@/components/player/player-stat';
import { useGetPlayer } from '@/api/player';
import { LoadingBox } from '@/components/common/loading-spinner';
import PlayerInfoTab from '@/components/player/player-info-tab';
import PlayerCareer from '@/components/player/player-career';
import PlayerComment from '@/components/player/player-comment';

type PlayerProps = {
  playerId: string;
};

export default function Player({ playerId }: PlayerProps) {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'career';

  const { isPending, error, data: playerData } = useGetPlayer({ playerId: Number(playerId) });

  if (isPending) {
    return <LoadingBox />;
  }

  if (error) {
    return <div>선수 불러오기 실패</div>;
  }
  const { playerName, position, national, leagueTeamName } = playerData;

  return (
    <>
      <Box>
        <BoxHeading hTagType="h3">선수 시즌 기록</BoxHeading>
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-0">
          {/*<span className="relative mr-[40px] h-[180px] w-[180px] rounded-full">*/}
          <Image
            alt="썸네일"
            className="mr-4 h-[180px] w-[180px] overflow-hidden rounded-full"
            height={180}
            src={noImage}
            width={180}
          />
          {/*</span>*/}
          <PlayerInfo
            leagueTeamName={leagueTeamName}
            national={national}
            playerName={playerName}
            position={position}
          />
          <PlayerStat />
        </div>
      </Box>
      <Box>
        <PlayerInfoTab tab={tab} />
        <hr />
        {tab === 'career' ? <PlayerCareer /> : <PlayerComment />}
      </Box>
    </>
  );
}
