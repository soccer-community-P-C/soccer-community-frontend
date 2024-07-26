'use client';

import Box from '@/components/common/box';
import Editor from '@/components/write/editor';
import useInput from '@/hooks/useInput';
import useLeagueName from '@/hooks/useLeagueName';
import Input from '@/components/common/input';
import Button from '@/components/common/button';
import { useWritePost } from '@/api/post';
import { TWritePost } from '@/types/posts';
import { PREMIER_LEAGUE_ID } from '@/constants/league-game-id';

const emptyContentPattern = /<[^>]+>\s*(<br>\s*)*<\/[^>]+>/g;

const isEmptyContent = (content: string) => {
  const sanitizedInput = content.replace(emptyContentPattern, '').trim();
  return sanitizedInput === '';
};

export default function WritePage() {
  const { mutate: writePost } = useWritePost();
  const leagueName = useLeagueName();
  const title = useInput('');
  const content = useInput('');

  const memberId = PREMIER_LEAGUE_ID; // 임시 멤버 아이디

  const newPost: TWritePost = {
    title: title.value.trim(),
    content: content.value,
    category: leagueName,
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (title.value === '' || isEmptyContent(content.value)) {
      alert('제목 또는 내용을 입력해주세요.');
    }

    writePost({ post: newPost, memberId });
  }

  return (
    <Box>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input className="text-2xl" placeholder="제목을 입력하세요." type="text" {...title} />
        <Editor {...content} />
        <div className="text-right">
          <Button className="text-md h-10 w-32" type="submit">
            게시하기
          </Button>
        </div>
      </form>
    </Box>
  );
}
