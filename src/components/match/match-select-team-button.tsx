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
        'flex-all-center w-full gap-1 truncate rounded-lg px-[10px] py-0 text-lg leading-[43px]',
        isSelected ? 'border bg-background font-semibold' : '',
      )}
      onClick={onClick}
      type="button"
    >
      <Image
        alt="logo"
        className="inline-block h-[24px] w-[24px]"
        height={24}
        src={logoSrc}
        width={24}
      />
      <span>{team}</span>
    </button>
  );
}
