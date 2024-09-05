/**
 * 해당 항목 로고와 리그명을 나타내는 컴포넌트
 */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import BoxHeading from '@/components/common/box-heading';
import useLeagueTitle from '@/hooks/use-league-title';
import premierLogoWhite from '@/assets/img/logo/pl_logo_white.png';
import premierLogo from '@/assets/img/logo/pl_logo.png';

export default function LeagueTitle() {
  const { alt, leagueName, logoSrc } = useLeagueTitle();
  const [logo, setLogo] = useState(logoSrc);
  const { theme } = useTheme();

  useEffect(() => {
    if (leagueName === '프리미어리그' && theme === 'dark') {
      return setLogo(premierLogoWhite.src);
    }

    if (leagueName === '프리미어리그' && theme === 'light') {
      return setLogo(premierLogo.src);
    }

    setLogo(logoSrc);
  }, [leagueName, theme, logoSrc]);

  return (
    <div className="flex items-center gap-6">
      <Image
        alt={alt}
        className="h-[58px] w-[136px] dark:w-[156px]"
        height={58}
        src={logo}
        width={136}
      />
      <BoxHeading className="sm-block" hTagType="h1">
        {leagueName}
      </BoxHeading>
    </div>
  );
}
