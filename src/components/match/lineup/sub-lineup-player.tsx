import Link from 'next/link';
import Card from '@/components/match/card/card';
import { splitName } from '@/components/match/match.utils';
import ChangeIcon from '@/components/match/lineup/change-icon';
import { TGameSubstitution } from '@/types/schedules';

function hasName(name: string) {
  return name && name.length > 0;
}

export default function SubLineupPlayer({
  minute,
  playerInId,
  playerInName,
  playerOutName,
  playerOutId,
  cardType,
}: TGameSubstitution & { cardType?: string | null | undefined }) {
  const [firstName, lastName] = splitName(playerOutName);

  return (
    <div className="flex flex-col">
      <div>
        <div className="mt-1 flex gap-1">
          <Link
            // className="flex w-auto flex-col hover:text-gray-400 dark:hover:text-gray-300"
            className="flex-all-center w-auto gap-1 hover:text-gray-400 dark:hover:text-gray-300"
            href={`/player/${playerInId}`}
          >
            {hasName(splitName(playerInName)[0]) && hasName(splitName(playerInName)[1]) ? (
              <>
                <span className="text-[13px] sm-in:hidden">{splitName(playerInName)[0]}</span>
                <span className="font-semibold">{splitName(playerInName)[1]}</span>
              </>
            ) : (
              <>
                {/*<span className="whitespace-pre-wrap text-[13px] sm-in:hidden"> </span>*/}
                <span className="font-semibold">
                  {splitName(playerInName)[0].length > 0
                    ? splitName(playerInName)[0]
                    : splitName(playerInName)[1]}
                </span>
              </>
            )}
            <Card cardType={cardType} />
          </Link>
        </div>
      </div>
      <div className="mt-1 flex gap-1 text-[13px] text-gray-400">
        <ChangeIcon />
        <div className="flex gap-1">
          <Link
            className="flex-all-center w-auto hover:text-gray-400 dark:hover:text-gray-300"
            href={`/player/${playerOutId}`}
          >
            {hasName(firstName) && hasName(lastName) ? (
              <>
                {/*<span className="text-[10px] sm-in:hidden">{firstName}</span>*/}
                <span className="font-semibold">{lastName}</span>
              </>
            ) : (
              <>
                {/*<span className="whitespace-pre-wrap text-[10px]"> </span>*/}
                <span className="font-semibold">{firstName.length > 0 ? firstName : lastName}</span>
              </>
            )}
          </Link>
        </div>
        <span>{minute}&apos;</span>
      </div>
    </div>
  );
}
