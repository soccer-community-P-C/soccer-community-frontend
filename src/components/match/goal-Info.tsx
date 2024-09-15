import { IconBallFootball } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

type GoalInfoProps = {
  player: string;
  time: number;
  away?: boolean;
};

export default function GoalInfo({ away = false, player, time }: GoalInfoProps) {
  return (
    <div className={twMerge('flex items-center gap-0 sm:gap-1', away ? 'flex-row-reverse' : '')}>
      <span>
        {player} {`${time}'`}
      </span>
      <IconBallFootball className="sm-block" size={18} />
    </div>
  );
}
