import { IconChevronRight } from '@tabler/icons-react';
import LinkItem from '@/components/Common/LinkItem';
import ResultOfGameItem from '@/components/Result/ResultOfGameItem';

export default function ResultOfGame() {
  return (
    <>
      <h3 className="text-lg">5월 21일 화요일</h3>
      <div className="items-center rounded-md border text-lg">
        <ResultOfGameItem away="에버튼" home="첼시" score="2 - 2" />
        <hr />
        <ResultOfGameItem away="맨유" home="맨시티" score="1 - 1" />
      </div>

      <footer className="flex justify-end gap-8">
        <LinkItem addClassName="text-base flex" href="/premier/rank">
          <p>게시글</p>
          <IconChevronRight />
        </LinkItem>
        <LinkItem addClassName="text-base flex" href="/premier/rank">
          <p>순위보기</p>
          <IconChevronRight />
        </LinkItem>
      </footer>
    </>
  );
}
