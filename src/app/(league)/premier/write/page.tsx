'use client';

import Box from '@/components/common/box';
import Editor from '@/components/write/editor';
import useInput from '@/hooks/useInput';
import Input from '@/components/common/input';
import Button from '@/components/common/button';

export default function WritePage() {
  const title = useInput('');
  const content = useInput('');

  return (
    <Box>
      <form className="flex flex-col gap-4">
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
