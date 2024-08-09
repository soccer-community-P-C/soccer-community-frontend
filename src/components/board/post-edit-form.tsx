import PostForm from '@/components/write/post-form';
import useInput from '@/hooks/useInput';
import { useEditPost } from '@/api/post';
import { isEmptyContent } from '@/utils/check-content';

type PostEditFormProps = {
  originalTitle: string;
  originalContent: string;
  category: string;
  postId: number;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PostEditForm({
  originalTitle,
  originalContent,
  category,
  postId,
  setIsEditMode,
}: PostEditFormProps) {
  const title = useInput(originalTitle);
  const content = useInput(originalContent);

  const { mutateAsync } = useEditPost();

  async function handleEditPost(event: React.FormEvent) {
    event.preventDefault();
    if (title.value === '' || isEmptyContent(content.value)) {
      return alert('제목 또는 내용을 입력해주세요.');
    }

    if (confirm('수정하시겠습니까?')) {
      await mutateAsync({ post: { title: title.value, content: content.value, category }, postId });
      setIsEditMode(false);
    }
  }

  function handleCancel() {
    setIsEditMode(false);
  }

  return (
    <PostForm content={content} onCancel={handleCancel} onSubmit={handleEditPost} title={title} />
  );
}
