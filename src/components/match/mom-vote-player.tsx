import { useState } from 'react';

type MomVoteItemProps = {
  name: string;
  score: number;
};
export default function MomVotePlayer({ name, score }: MomVoteItemProps) {
  const [currentScore, setCurrentScore] = useState(score);
  return (
    <li
      className="flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition duration-150 ease-in-out active:scale-95"
      onClick={() => setCurrentScore((prevState) => prevState + 1)}
    >
      <span className="mr-9 h-[50px] w-[50px]">사진</span>
      <strong className="ml-6 text-lg">{name}</strong>
      <div className="ml-auto w-[100px]">
        <span className="text-xs opacity-60">득표수</span> {currentScore}표
      </div>
    </li>
  );
}
