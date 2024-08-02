import LinkItem from '@/components/common/link-item';

type MatchRecordTabProps = {
  tab: string | null;
};

export default function MatchRecordTab({ tab }: MatchRecordTabProps) {
  return (
    <div className="text-xl">
      <ul className="flex flex-row items-center justify-center gap-8">
        <li>
          <LinkItem
            className={tab === 'league-game' ? 'underline' : undefined}
            href={{
              query: {
                tab: 'league-game',
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
