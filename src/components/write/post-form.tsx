import { FormEventHandler } from 'react';
import { Input } from '@/components/ui/input';
import Editor from '@/components/write/editor';
import { Button } from '@/components/ui/button';
import { TUseInputReturn } from '@/hooks/useInput';

type PostFormProps = {
  title: TUseInputReturn;
  content: TUseInputReturn;
  onCancel: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function PostForm({ title, content, onCancel, onSubmit }: PostFormProps) {
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Input
        className="text-xl sm:text-2xl"
        onChange={title.onChange}
        placeholder="제목을 입력하세요."
        type="text"
        value={title.value}
      />
      <Editor onChange={content.onChange} value={content.value} />
      <div className="flex justify-between gap-2">
        <button
          // TODO: Button의 타입으로 분리
          className="rounded-lg px-4 py-2 text-base hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:px-9"
          onClick={onCancel}
          type="button"
        >
          취소하기
        </button>
        <Button className="h-10 px-4 text-base sm:px-9" type="submit">
          게시하기
        </Button>
      </div>
    </form>
  );
}
