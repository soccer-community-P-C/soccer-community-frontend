type MatchRecordCategoryItemProps = {
  homeCount: string;
  awayCount: string;
  isShare?: boolean;
  title: string;
};

export default function MatchRecordCategoryItem({
  homeCount,
  awayCount,
  isShare = false, // 점유율 % 이면 true, 횟수면 false
  title,
}: MatchRecordCategoryItemProps) {
  if (!homeCount || !awayCount) {
    return;
  }

  return (
    <li className="flex w-full justify-center">
      <div className="flex items-center justify-center text-right">
        <span className="relative hidden h-[7px] min-w-[240px] md:block">
          <em
            className="absolute right-0 h-full w-[50%] bg-blue-500 dark:border dark:border-gray-400"
            style={{
              width: isShare ? `${Number(homeCount)}%` : `${Math.min(Number(homeCount) * 5, 100)}%`,
            }}
          />
        </span>
        <strong className="w-[50px]">
          {homeCount}
          {isShare ? '%' : null}
        </strong>
      </div>
      <div className="w-[120px] text-center font-[16px] opacity-60">{title}</div>
      <div className="flex items-center justify-center text-left">
        <strong className="w-[50px]">
          {awayCount}
          {isShare ? '%' : null}
        </strong>
        <span className="relative hidden h-[7px] min-w-[240px] text-left md:block">
          <em
            className="absolute left-0 h-full bg-red-500 dark:border dark:border-gray-400"
            style={{
              width: isShare ? `${Number(awayCount)}%` : `${Math.min(Number(awayCount) * 5, 100)}%`,
            }}
          />
        </span>
      </div>
    </li>
  );
}
