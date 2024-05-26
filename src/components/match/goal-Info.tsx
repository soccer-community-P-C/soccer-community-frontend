import { IconBallFootball } from '@tabler/icons-react';

type GoalInfoProps = {
  player: string;
  goalTimeList: number[];
  away?: boolean;
};

export default function GoalInfo({ away = false, player, goalTimeList }: GoalInfoProps) {
  let content = (
    <>
      <span>
        {player} {goalTimeList.map((time) => `${time}' `)}
      </span>
      <IconBallFootball size={18} />
    </>
  );

  if (away) {
    content = (
      <>
        <IconBallFootball size={18} />
        <span>
          {player} {goalTimeList.map((time) => `${time}' `)}
        </span>
      </>
    );
  }

  return <div className="flex items-center gap-2">{content}</div>;
}
