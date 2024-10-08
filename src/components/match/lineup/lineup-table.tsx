import { TGameBooking, TGamePlayer } from '@/types/schedules';
import LineupTableThead from '@/components/match/lineup/lineup-table-thead';
import { generateLineupArray } from '@/components/match/match.utils';
import LineupTableTbody from '@/components/match/lineup/lineup-table-tbody';

type LineupTableProps = {
  homePlayers: TGamePlayer[];
  awayPlayers: TGamePlayer[];
  awayLogo: string;
  homeLogo: string;
  bookings: TGameBooking[];
};

export default function LineupTable({
  homePlayers,
  awayPlayers,
  awayLogo,
  homeLogo,
  bookings,
}: LineupTableProps) {
  const { homeLineup, awayLineup } = generateLineupArray(homePlayers, awayPlayers, bookings);

  return (
    <div className="relative overflow-hidden pb-[4px]">
      <table className="table w-full table-fixed">
        <LineupTableThead awayLogo={awayLogo} homeLogo={homeLogo} />
        <LineupTableTbody awayLineup={awayLineup} homeLineup={homeLineup} />
      </table>
    </div>
  );
}
