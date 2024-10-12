import LineupPlayer from '@/components/match/lineup/lineup-player';
import { TLineup } from '@/components/match/match.utils';

type SubLineupTableTbodyProps = {
  homeLineup: TLineup[];
  awayLineup: TLineup[];
};

export default function LineupTableTbody({ homeLineup, awayLineup }: SubLineupTableTbodyProps) {
  const lineupLength = Math.max(homeLineup.length, awayLineup.length);
  return (
    <tbody>
      {Array(lineupLength)
        .fill(0)
        .map((_, index) => {
          const homePlayer = homeLineup[index];
          const awayPlayer = awayLineup[index];
          return (
            <tr className="border-b dark:border-gray-700" key={index}>
              <td>
                <div className="border-r pl-1 pt-1 dark:border-gray-700 sm:pb-1 sm:pl-16 sm:pt-2">
                  {homePlayer ? <LineupPlayer {...homePlayer} /> : <div />}
                </div>
              </td>
              <td>
                <div className="pl-1 pt-1 sm:pb-1 sm:pl-16 sm:pt-2">
                  {awayPlayer ? <LineupPlayer {...awayPlayer} /> : <div />}
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}
