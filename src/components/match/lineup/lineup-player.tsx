import Link from 'next/link';
import Card from '@/components/match/card/card';
import { splitName, TLineup } from '@/components/match/match.utils';
import ChangeIcon from '@/components/match/lineup/change-icon';

function hasName(name: string) {
  return name && name.length > 0;
}

export default function LineupPlayer({
  playerId,
  playerKrName,
  position,
  subPlayerInName,
  subPlayerInId,
  subCardType,
  cardType,
  shirtNumber,
  subMinute,
  hasSub,
}: TLineup) {
  const [firstName, lastName] = splitName(playerKrName);

  return (
    <div className="flex flex-col">
      <div className="flex gap-1">
        <Link
          // className="flex w-auto flex-col hover:text-gray-400 dark:hover:text-gray-300"
          className="flex-all-center w-auto gap-1 hover:text-gray-400 dark:hover:text-gray-300"
          href={`/player/${playerId}`}
        >
          {hasName(firstName) && hasName(lastName) ? (
            <>
              <span className="text-[13px] sm-in:hidden">{firstName}</span>
              <span className="font-semibold">{lastName}</span>
            </>
          ) : (
            <>
              {/*<span className="whitespace-pre-wrap text-[13px] sm-in:hidden"> </span>*/}
              <span className="font-semibold">{firstName.length > 0 ? firstName : lastName}</span>
            </>
          )}
          <Card cardType={cardType} />
        </Link>
      </div>
      <div className="flex gap-1 text-sm text-slate-400">
        <span className="sm-block">{shirtNumber}</span>
        <span className="sm-block">|</span>
        <p className="w-[140px] truncate">{position}</p>
      </div>
      {hasSub && subMinute && subPlayerInId && subPlayerInName ? (
        <div className="mt-1 flex gap-1 text-[13px] text-gray-400">
          <ChangeIcon />
          <div className="flex gap-1">
            <Link
              className="flex-all-center w-auto hover:text-gray-400 dark:hover:text-gray-300"
              href={`/player/${subPlayerInId}`}
            >
              {hasName(splitName(subPlayerInName!)[0]) &&
              hasName(splitName(subPlayerInName!)[1]) ? (
                <>
                  {/*<span className="text-[10px] sm-in:hidden">{firstName}</span>*/}
                  <span className="font-semibold">{splitName(subPlayerInName!)[1]}</span>
                </>
              ) : (
                <>
                  {/*<span className="whitespace-pre-wrap text-[10px]"> </span>*/}
                  <span className="font-semibold">
                    {splitName(subPlayerInName!)[0].length > 0
                      ? splitName(subPlayerInName!)[0]
                      : splitName(subPlayerInName!)[1]}
                  </span>
                </>
              )}
            </Link>
          </div>
          <span>{subMinute}&apos;</span>
        </div>
      ) : null}
    </div>
  );
}
