import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function MatchSelectTeamButton({
  isSelected,
  team,
  logoSrc,
  onClick,
}: {
  isSelected: boolean;
  team: string;
  logoSrc: string | StaticImport;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={twMerge(
        'block w-full truncate rounded-lg px-[10px] py-0 text-lg leading-[43px]',
        isSelected ? 'border bg-white font-semibold text-black' : '',
      )}
      onClick={onClick}
      type="button"
    >
      <Image alt="logo" className="inline-block h-[24px] w-[24px]" src={logoSrc} />
      {team}
    </button>
  );
}
