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
  subPlayerOutName,
  subPlayerOutId,
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
          className="flex-all-center w-auto gap-1 text-lg hover:text-gray-400 dark:hover:text-gray-300"
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
      <div className="flex gap-1 text-[13px] text-slate-400">
        <span className="sm-block">{shirtNumber}</span>
        <span className="sm-block">|</span>
        <p className="w-[140px] truncate">{position}</p>
      </div>

      {/*교체 아웃된 선수*/}
      {hasSub && subMinute && subPlayerOutId && subPlayerOutName ? (
        <div className="mt-1 flex gap-1 text-gray-400">
          <ChangeIcon />
          <div className="flex gap-1">
            <Link
              className="flex-all-center w-auto text-sm hover:text-gray-400 dark:hover:text-gray-300"
              href={`/player/${subPlayerOutId}`}
            >
              {hasName(splitName(subPlayerOutName)[0]) &&
              hasName(splitName(subPlayerOutName)[1]) ? (
                <>
                  {/*<span className="text-[10px] sm-in:hidden">{firstName}</span>*/}
                  <span>{splitName(subPlayerOutName)[1]}</span>
                </>
              ) : (
                <>
                  {/*<span className="whitespace-pre-wrap text-[10px]"> </span>*/}
                  <span>
                    {splitName(subPlayerOutName)[0].length > 0
                      ? splitName(subPlayerOutName)[0]
                      : splitName(subPlayerOutName)[1]}
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
