import Image from 'next/image';
import player_img from '@/assets/img/player_test_img.jpeg';
import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import PlayerInfo from '@/components/player/player-info';
import PlayerStat from '@/components/player/player-stat';

export default function Player() {
  return (
    <>
      <Box>
        <BoxHeading hTagType="h3">선수 시즌 기록</BoxHeading>
        <div className="flex">
          <span className="relative mr-[40px] h-[180px] w-[180px] rounded-full">
            <Image
              alt="썸네일"
              className="block h-full overflow-hidden rounded-full"
              fill={true}
              src={player_img}
            />
          </span>
          <PlayerInfo />
          <PlayerStat />
        </div>
      </Box>
      <Box>
        <BoxHeading hTagType="h3">경력 사항</BoxHeading>
        <hr />
        <table className="relative table-fixed overflow-hidden">
          <tbody>
            <tr>
              <th className="w-[200px] text-left text-[16px]">2024.01~</th>
              <td className="text-left text-[16px]">맨체스터 시티</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </>
  );
}
