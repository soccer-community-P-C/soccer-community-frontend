type MatchRecordCategoryItemProps = {
  homeCount: number;
  awayCount: number;
  isShare?: boolean;
  title: string;
};

export default function MatchRecordCategoryItem({
  homeCount,
  awayCount,
  isShare = false, // 점유율 인지
  title,
}: MatchRecordCategoryItemProps) {
  return (
    <li className="flex w-full justify-center">
      <div className="flex items-center justify-center text-right">
        <span className="relative h-[7px] w-[300px]">
          <em
            className="absolute right-0 h-full w-[50%] bg-amber-900"
            style={{ width: isShare ? `${homeCount}%` : `${homeCount * 5}%` }}
          />
        </span>
        <strong className="w-[50px] text-xs">
          {homeCount}
          {isShare ? '%' : null}
        </strong>
      </div>
      <div className="w-[120px] text-center font-[16px]">{title}</div>
      <div className="flex items-center justify-center text-left">
        <strong className="w-[50px] text-xs">
          {awayCount}
          {isShare ? '%' : null}
        </strong>
        <span className="relative h-[7px] w-[300px] text-left">
          <em
            className="absolute left-0 h-full bg-amber-900"
            style={{ width: isShare ? `${awayCount}%` : `${awayCount * 5}%` }}
          />
        </span>
      </div>
    </li>
  );
}
