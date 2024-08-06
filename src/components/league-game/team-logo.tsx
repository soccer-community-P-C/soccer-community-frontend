import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import cimg from '@/assets/Chelsea.png';

type TeamLogoProps = {
  name: string;
  teamId: number;
  onSelectedTeamId: (teamId: number) => void;
  selectedTeamId: number;
};

export default function TeamLogo({
  selectedTeamId,
  onSelectedTeamId,
  name,
  teamId,
}: TeamLogoProps) {
  // Todo: 로고 받아야함

  return (
    <div className="flex h-20 w-24 flex-col items-center">
      <button
        className={twMerge(
          'relative my-auto w-full overflow-hidden rounded-md transition-colors hover:bg-white/60',
          selectedTeamId === teamId ? 'bg-white text-blue-700' : '',
        )}
        onClick={() => onSelectedTeamId(teamId)}
        type="button"
      >
        <div className="object-contain">
          <Image alt={name} className="mx-auto" height={60} src={cimg} width={60} />
        </div>
        <span className="text-center text-xs font-semibold">{name}</span>
      </button>
    </div>
  );
}
