/**
 * 해당 항목 로고와 리그명을 나타내는 컴포넌트
 */
import Image from 'next/image';
import BoxHeading from '@/components/common/box-heading';

type LeagueTitleProps = {
  title: string;
  logoSrc: string;
  alt: string;
  width?: number;
};

export default function LeagueTitle({ title, logoSrc, width = 136, alt }: LeagueTitleProps) {
  return (
    <div className="flex items-center gap-6">
      <Image alt={alt} className="h-[58px] w-[136px]" height={58} src={logoSrc} width={width} />
      <BoxHeading hTagType="h1">{title}</BoxHeading>
    </div>
  );
}
