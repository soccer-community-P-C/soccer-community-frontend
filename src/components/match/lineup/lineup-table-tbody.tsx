import LineupPlayer from '@/components/match/lineup/lineup-player';
import { TLineup } from '@/components/match/match.utils';

type SubLineupTableTbodyProps = {
  homeLineup: TLineup[];
  awayLineup: TLineup[];
};

export default function LineupTableTbody({ homeLineup, awayLineup }: SubLineupTableTbodyProps) {
  return (
    <tbody>
      {Array(11)
        .fill(0)
        .map((_, index) => {
          const homePlayer = homeLineup[index];
          const awayPlayer = awayLineup[index];
          return (
            <tr className="border-b dark:border-gray-700" key={index}>
              <td>
                <div className="border-r pl-1 pt-1 dark:border-gray-700 sm:pb-1 sm:pl-16 sm:pt-2">
                  <LineupPlayer {...homePlayer} />
                </div>
              </td>
              <td>
                <div className="pl-1 pt-1 sm:pb-1 sm:pl-16 sm:pt-2">
                  <LineupPlayer {...awayPlayer} />
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}
