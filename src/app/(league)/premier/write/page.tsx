'use client';

import Box from '@/components/common/box';
import Editor from '@/components/write/editor';
import useInput from '@/hooks/useInput';
import useLeagueName from '@/hooks/useLeagueName';
import Input from '@/components/common/input';
import Button from '@/components/common/button';
import { useWritePost } from '@/api/post';
import { TWritePost } from '@/types/posts';

export default function WritePage() {
  const { mutate: writePost } = useWritePost();
  const leagueName = useLeagueName();
  const title = useInput('');
  const content = useInput('');

  const memberId = 2; // 임시 멤버 아이디

  const newPost: TWritePost = { title: title.value, content: content.value, category: leagueName };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
