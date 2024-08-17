'use client';

import { useRouter } from 'next/navigation';
import Box from '@/components/common/box';
import PostForm from '@/components/write/post-form';
import useInput from '@/hooks/useInput';
import { useWritePost } from '@/api/post';
import { TWritePost } from '@/types/posts';
import { isEmptyContent } from '@/utils/check-content';

export default function WritePage() {
  const { mutate: writePost } = useWritePost();
  const router = useRouter();
  const title = useInput('');
  const content = useInput('');

  const newPost: TWritePost = {
    title: title.value.trim(),
    content: content.value,
    category: '',
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (title.value === '' || isEmptyContent(content.value)) {
      return alert('제목 또는 내용을 입력해주세요.');
    }

    writePost({ post: newPost });
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
