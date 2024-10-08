import { TGameBooking, TGamePlayer } from '@/types/schedules';
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
                <div className="border-r pl-1 pt-1 sm:pb-1 sm:pl-16 sm:pt-4">
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
                <div className="pl-1 pt-1 sm:pb-1 sm:pl-16 sm:pt-4">
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
