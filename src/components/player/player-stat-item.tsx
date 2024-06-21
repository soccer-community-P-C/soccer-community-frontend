export default function PlayerStatItem({
  title,
  description,
}: {
  title: string;
  description: string | number;
}) {
  return (
    <dl className="float-left mb-[13px] w-1/4 leading-[17px]">
      <dt className="text-[13px] opacity-60">{title}</dt>
      <dd className="mt-[5px] h-[26px] text-[22px]">{description}</dd>
    </dl>
  );
}
