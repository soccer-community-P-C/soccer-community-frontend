import { IconBallFootball } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

type GoalInfoProps = {
  player: string;
  goalTimeList: number[];
  away?: boolean;
};

export default function GoalInfo({ away = false, player, goalTimeList }: GoalInfoProps) {
  return (
    <div className={twMerge('flex items-center gap-2', away ? 'flex-row-reverse' : '')}>
      <span>
        {player} {goalTimeList.map((time) => `${time}' `)}
      </span>
      <IconBallFootball size={18} />
    </div>
  );
}
