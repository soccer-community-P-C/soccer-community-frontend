import Link from 'next/link';
import Card from '@/components/match/card/card';
import { splitName, TLineup } from '@/components/match/match.utils';

function hasName(name: string) {
  return name && name.length > 0;
}

export default function LineupPlayer({
  playerId,
  position,
  shirtNumber,
  cardType,
  playerKrName,
}: TLineup) {
  const [firstName, lastName] = splitName(playerKrName);

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

      {/*{hasSub && sub ? (*/}
      {/*  <div>*/}
      {/*    <ChangeIcon />*/}
      {/*    <div className="mt-1 flex gap-1">*/}
      {/*      <Link*/}
      {/*        className="flex w-auto flex-col hover:text-gray-400 dark:hover:text-gray-300"*/}
      {/*        href={`/player/${sub.playerInId}`}*/}
      {/*      >*/}
      {/*        {hasName(splitName(sub.playerInName)[0]) &&*/}
      {/*        hasName(splitName(sub.playerInName)[1]) ? (*/}
      {/*          <>*/}
      {/*            <span className="text-[13px]">{splitName(sub.playerInName)[0]}</span>*/}
      {/*            <span className="font-semibold">{splitName(sub.playerInName)[1]}</span>*/}
      {/*          </>*/}
      {/*        ) : (*/}
      {/*          <>*/}
      {/*            <span className="whitespace-pre-wrap text-[13px]"> </span>*/}
      {/*            <span className="font-semibold">*/}
      {/*              {splitName(sub.playerInName)[0].length > 0*/}
      {/*                ? splitName(sub.playerInName)[0]*/}
      {/*                : splitName(sub.playerInName)[1]}*/}
      {/*            </span>*/}
      {/*          </>*/}
      {/*        )}*/}
      {/*      </Link>*/}

      {/*      <Card cardType={sub.cardType} className="mt-6" />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*) : null}*/}
    </div>
  );
}
