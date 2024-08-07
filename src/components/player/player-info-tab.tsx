import LinkItem from '@/components/common/link-item';

type PlayerInfoTabProps = {
  tab: string | null;
};

export default function PlayerInfoTab({ tab }: PlayerInfoTabProps) {
  return (
    <div className="text-xl">
      <ul className="flex flex-row items-center justify-center gap-8">
        <li>
          <LinkItem
            className={tab === 'career' ? 'underline' : undefined}
            href={{
              query: {
                tab: 'career',
              },
            }}
          >
            경력 사항
          </LinkItem>
        </li>
        <li>
          <LinkItem
            className={tab === 'comment' ? 'underline' : undefined}
            href={{
              query: {
                tab: 'comment',
              },
            }}
          >
            응원 댓글
          </LinkItem>
        </li>
      </ul>
    </div>
  );
}
