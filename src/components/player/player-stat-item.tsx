type PlayerStatItemProps = {
  title: string;
  description: string | number;
};
export default function PlayerStatItem({ title, description }: PlayerStatItemProps) {
  return (
    <dl className="float-left mb-[13px] w-1/4 leading-[17px]">
      <dt className="text-[10px] opacity-60 sm:text-[13px]">{title}</dt>
      <dd className="mt-[5px] h-[26px] text-base sm:text-[22px]">{description}</dd>
    </dl>
  );
}
