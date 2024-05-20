/**
 * 해당 항목 로고와 리그명을 나타내는 컴포넌트
 */
import Image from 'next/image';

type LeagueTitleProps = {
  title: string;
  logoSrc: string;
  alt: string;
  width?: number;
};

export default function LeagueTitle({ title, logoSrc, width = 136, alt }: LeagueTitleProps) {
  return (
    <div className="flex items-center gap-6">
      <Image alt={alt} height={136} src={logoSrc} width={width} />
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
}
