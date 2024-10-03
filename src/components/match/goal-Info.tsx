import { IconBallFootball } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

type GoalInfoProps = {
  player: string;
  time: number;
  playerId: number;
  away?: boolean;
};

export default function GoalInfo({ away = false, player, time, playerId }: GoalInfoProps) {
  return (
    <Link
      className={twMerge(
        'flex items-center gap-0 hover:text-gray-300 sm:gap-1',
        away ? 'flex-row-reverse' : '',
      )}
      href={`player/${playerId}`}
    >
      <span>
        {player} {`${time}'`}
      </span>
      <IconBallFootball className="sm-block" size={18} />
    </Link>
  );
}
