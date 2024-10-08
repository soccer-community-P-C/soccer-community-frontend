import Link from 'next/link';
import Card from '@/components/match/card/card';
import { splitName } from '@/components/match/match.utils';

type LineupPlayerProps = {
  name: string;
  cardType: string | null | undefined;
  shirtNumber: string;
  position: string;
  playerId: number;
};

function hasName(name: string) {
  return name && name.length > 0;
}

export default function LineupPlayer({
  name,
  cardType,
  shirtNumber,
  position,
  playerId,
}: LineupPlayerProps) {
  const [firstName, lastName] = splitName(name);

  return (
    <div className="flex flex-col">
      <div className="flex gap-1">
        <Link
          className="flex w-auto flex-col hover:text-gray-400 dark:hover:text-gray-300"
          href={`/player/${playerId}`}
        >
          {hasName(firstName) && hasName(lastName) ? (
            <>
              <span className="text-[13px]">{firstName}</span>
              <span className="font-semibold">{lastName}</span>
            </>
          ) : (
            <>
              <span className="whitespace-pre-wrap text-[13px]"> </span>
              <span className="font-semibold">{firstName.length > 0 ? firstName : lastName}</span>
            </>
          )}
        </Link>

        <Card cardType={cardType} className="mt-6" />
      </div>
      <div className="flex gap-1 text-sm text-slate-400">
        <span className="sm-block">{shirtNumber}</span>
        <span className="sm-block">|</span>
        <p className="w-[140px] truncate">{position}</p>
      </div>
    </div>
  );
}
