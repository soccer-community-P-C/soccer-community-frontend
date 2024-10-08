import Image from 'next/image';
import FormationItem from '@/components/match/formation/formation-item';

type FormationProps = {
  homeFormation: string;
  awayFormation: string;
  awayLogo: string;
  homeLogo: string;
};

export default function Formation({
  homeFormation,
  awayFormation,
  awayLogo,
  homeLogo,
}: FormationProps) {
  return (
    <div className="mb-10 w-full sm:h-[400px]">
      <div className="mb-2 flex h-[30px] w-full">
        <div className="flex-all-center w-full sm:w-1/2">
          <p className="flex text-lg">
            <Image alt="홈 로고" className="mr-2 h-6 w-6" height={16} src={homeLogo} width={16} />
            <span className="font-semibold">{homeFormation}</span>
          </p>
        </div>
        <div className="sm:flex-all-center hidden w-1/2">
          <p className="flex text-lg">
            <Image alt="원정 로고" className="mr-2 h-6 w-6" height={16} src={awayLogo} width={16} />
            <span className="font-semibold">{awayFormation}</span>
          </p>
        </div>
      </div>
      <div className="relative flex h-full w-full flex-col sm:flex-row">
        <FormationItem formation={[1, ...homeFormation.split('-').map(Number)]} isLeft={true} />
        <div className="flex-all-center mt-2 w-full sm:hidden">
          <p className="mx-auto flex text-lg">
            <Image alt="원정 로고" className="mr-2 h-6 w-6" height={16} src={awayLogo} width={16} />
            <span className="font-semibold">{awayFormation}</span>
          </p>
        </div>
        <FormationItem formation={[1, ...awayFormation.split('-').map(Number)]} isLeft={false} />
        <span className="sm-block absolute left-1/2 top-0 h-full w-[2px] bg-[#338657]" />
        <span className="sm-block absolute left-1/2 top-1/2 h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-[#338657]" />{' '}
      </div>
    </div>
  );
}
