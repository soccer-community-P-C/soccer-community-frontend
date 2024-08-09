'use client';

import { useRouter } from 'next/navigation';
import Box from '@/components/common/box';
import PostForm from '@/components/write/post-form';
import useInput from '@/hooks/useInput';
import useLeagueName from '@/hooks/useLeagueName';
import { useWritePost } from '@/api/post';
import { TWritePost } from '@/types/posts';
import { PREMIER_LEAGUE_ID } from '@/constants/league-game-id';
import { isEmptyContent } from '@/utils/check-content';

export default function WritePage() {
  const { mutate: writePost } = useWritePost();
  const router = useRouter();
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
      return alert('제목 또는 내용을 입력해주세요.');
    }

    writePost({ post: newPost, memberId });
  }

  function handleCancel() {
    router.back();
  }

  return (
    <Box>
      <PostForm content={content} onCancel={handleCancel} onSubmit={handleSubmit} title={title} />
    </Box>
  );
}
