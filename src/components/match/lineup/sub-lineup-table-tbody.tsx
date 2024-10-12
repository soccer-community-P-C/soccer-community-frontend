import { TGameSubstitution } from '@/types/schedules';
import SubLineupPlayer from '@/components/match/lineup/sub-lineup-player';

type SubLineupTableTbodyProps = {
  homeLineup: (TGameSubstitution & Partial<{ cardType: string | null | undefined }>)[];
  awayLineup: (TGameSubstitution & Partial<{ cardType: string | null | undefined }>)[];
};

export default function SubLineupTableTbody({ homeLineup, awayLineup }: SubLineupTableTbodyProps) {
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
                <div className="border-r pl-1 pt-1 dark:border-gray-700 sm:pb-1 sm:pl-16 sm:pt-1">
                  {homePlayer ? <SubLineupPlayer {...homePlayer} /> : <div />}
                </div>
              </td>
              <td>
                <div className="pl-1 pt-1 sm:pb-1 sm:pl-16 sm:pt-1">
                  {awayPlayer ? <SubLineupPlayer {...awayPlayer} /> : <div />}
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}
