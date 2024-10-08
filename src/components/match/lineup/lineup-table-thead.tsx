import Image from 'next/image';

type LineupTableTheadProps = {
  homeLogo: string;
  awayLogo: string;
};

export default function LineupTableThead({ homeLogo, awayLogo }: LineupTableTheadProps) {
  return (
    <thead>
      <tr>
        <th>
          <div className="flex h-[40px] items-center justify-start text-lg font-semibold sm:pl-16">
            <Image alt="홈로고" className="h-10 w-10" height={24} src={homeLogo} width={24} />
            <span className="pl-2">홈</span>
          </div>
        </th>
        <th>
          <div className="flex h-[40px] items-center justify-start text-lg font-semibold sm:pl-16">
            <Image alt="원정로고" className="h-10 w-10" height={24} src={awayLogo} width={24} />
            <span>원정</span>
          </div>
        </th>
      </tr>
    </thead>
  );
}
