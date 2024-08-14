import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type TeamLogoProps = {
  name: string;
  logo: string;
  teamId: number;
  onSelectedTeamId: (teamId: number) => void;
  selectedTeamId: number;
};

export default function TeamLogo({
  selectedTeamId,
  onSelectedTeamId,
  name,
  logo,
  teamId,
}: TeamLogoProps) {
  return (
    <div className="flex h-20 w-24 flex-col items-center">
      <button
        className={twMerge(
          'relative my-auto h-full w-full overflow-hidden rounded-md transition-colors hover:bg-white/60',
          selectedTeamId === teamId ? 'bg-white text-blue-700' : '',
        )}
        onClick={() => onSelectedTeamId(teamId)}
        type="button"
      >
        <div className="object-contain">
          <Image
            alt={name}
            className="mx-auto h-[50px] w-[50px]"
            height={40}
            src={logo}
            width={40}
          />
        </div>
        <p className="truncate px-2 text-center text-xs font-semibold">{name}</p>
      </button>
    </div>
  );
}
