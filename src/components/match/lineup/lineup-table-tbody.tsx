import Link from 'next/link';
import Card from '@/components/match/card/card';
import { TGameBooking, TGamePlayer } from '@/types/schedules';
import { splitName } from '@/components/match/match.utils';
import ChangeIcon from '@/components/match/lineup/change-icon';
import LineupPlayer from '@/components/match/lineup/lineup-player';

type LineupTableTbodyProps = {
  homeLineup: (TGamePlayer & Partial<TGameBooking>)[];
  awayLineup: (TGamePlayer & Partial<TGameBooking>)[];
};

export default function LineupTableTbody({ homeLineup, awayLineup }: LineupTableTbodyProps) {
  return (
    <tbody>
      {Array(11)
        .fill(0)
        .map((_, index) => {
          const homePlayer = homeLineup[index];
          const awayPlayer = awayLineup[index];
          return (
            <tr className="border-b" key={index}>
              <td>
                <div className="border-r pb-1 pl-1 pt-4 sm:pl-16">
                  <LineupPlayer
                    cardType={homePlayer.cardType}
                    name={homePlayer.playerKrName}
                    playerId={homePlayer.playerId}
                    position={homePlayer.position}
                    shirtNumber={homePlayer.shirtNumber}
                  />
                </div>
              </td>
              <td>
                <div className="py-4 pl-2 sm:pl-16">
                  <LineupPlayer
                    cardType={awayPlayer.cardType}
                    name={awayPlayer.playerKrName}
                    playerId={awayPlayer.playerId}
                    position={awayPlayer.position}
                    shirtNumber={awayPlayer.shirtNumber}
                  />
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}
