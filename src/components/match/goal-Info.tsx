import { IconBallFootball } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

type GoalInfoProps = {
  player: string;
  time: number;
  playerId: number;
  away?: boolean;
  type: string;
};

export default function GoalInfo({ away = false, player, time, playerId, type }: GoalInfoProps) {
  return (
    <Link
      className={twMerge(
        'flex items-center gap-0 hover:text-gray-300 sm:gap-1',
        away ? 'flex-row-reverse' : '',
      )}
      href={`/player/${playerId}`}
    >
      <span>{type === 'OWN' ? `${player} (자책골) ${time}'` : `${player} ${time}'`}</span>
      <IconBallFootball className="sm-block" color={type === 'OWN' ? 'red' : 'white'} size={18} />
    </Link>
  );
}
