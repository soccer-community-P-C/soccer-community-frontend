export default function PlayerInfoItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <dl className="table-row text-[14px] leading-6">
      <dt className="table-cell pr-[12px] opacity-60">{title}</dt>
      <dd className="table-cell">{description}</dd>
    </dl>
  );
}
