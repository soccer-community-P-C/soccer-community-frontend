import MatchRecordCategoryItem from '@/components/match/match-record-category-item';

export default function MatchRecord() {
  return (
    <>
      <div className="flex flex-row items-center justify-center text-xl">
        <strong className="text-right">첼시</strong>
        <span className="w-[92px] text-center">vs</span>
        <strong className="text-left">토트넘</strong>
      </div>
      <div>
        <ul className="flex flex-col items-center gap-2">
          <MatchRecordCategoryItem awayCount={42} homeCount={58} isShare={true} title="볼점유율" />
          <MatchRecordCategoryItem awayCount={2} homeCount={10} title="슈팅" />
          <MatchRecordCategoryItem awayCount={2} homeCount={10} title="유효슈팅" />
          <MatchRecordCategoryItem awayCount={2} homeCount={10} title="코너킥" />
          <MatchRecordCategoryItem awayCount={2} homeCount={10} title="프리킥" />
          <MatchRecordCategoryItem awayCount={2} homeCount={10} title="오프사이드" />
          <MatchRecordCategoryItem awayCount={2} homeCount={10} title="파울" />
          <MatchRecordCategoryItem awayCount={2} homeCount={10} title="선방" />
          <MatchRecordCategoryItem awayCount={2} homeCount={10} title="선수교체" />
          <MatchRecordCategoryItem awayCount={2} homeCount={10} title="경고" />
          <MatchRecordCategoryItem awayCount={2} homeCount={10} title="골킥" />
          <MatchRecordCategoryItem awayCount={2} homeCount={10} title="퇴장" />
        </ul>
      </div>
    </>
  );
}
