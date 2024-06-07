import LinkItem from '@/components/common/link-item';

type MatchRecordTabProps = {
  home: string;
  away: string;
  tab: string | null;
  date: string | null;
};

export default function MatchRecordTab({ home, away, tab, date }: MatchRecordTabProps) {
  return (
    <div className="text-xl">
      <ul className="flex flex-row items-center justify-center gap-8">
        <li>
          <LinkItem
            className={tab === 'result' ? 'underline' : undefined}
            href={{
              query: {
                date: date,
                team: `${home}-${away}`,
                tab: 'result',
              },
            }}
          >
            기록
          </LinkItem>
        </li>
        <li>
          <LinkItem
            className={tab === 'mom' ? 'underline' : undefined}
            href={{
              query: {
                date: date,
                team: `${home}-${away}`,
                tab: 'mom',
              },
            }}
          >
            MOM 투표
          </LinkItem>
        </li>
      </ul>
    </div>
  );
}
