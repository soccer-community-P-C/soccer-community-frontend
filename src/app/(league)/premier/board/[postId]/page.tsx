'use client';

import sanitizeHtml from 'sanitize-html';
import { IconEye, IconMessage, IconThumbUp } from '@tabler/icons-react';
import Box from '@/components/common/box';
import Button from '@/components/common/button';
import 'react-quill/dist/quill.snow.css';

export default function PostPage() {
  const body = '<p>내용</p>';

  return (
    <Box>
      <div className="text-2xl">제목</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gray-400" />
          <div>닉네임</div>
        </div>
        <div className="flex items-center gap-3">
          <div>2024.06.23</div>
          <div className="h-3 w-[1px] bg-gray-400" />
          <div className="flex items-center gap-1">
            <IconEye className="h-5 w-5" />
            20
          </div>
          <div className="h-3 w-[1px] bg-gray-400" />
          <div className="flex items-center gap-1">
            <IconThumbUp /> 4
          </div>
          <div className="h-3 w-[1px] bg-gray-400" />
          <div className="flex items-center gap-1">
            <IconMessage /> 1
          </div>
        </div>
      </div>
      <div className="ql-snow">
        <div
          className="ql-editor"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(body, {
              allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
            }),
          }}
        />
      </div>
      <button className="flex w-14 cursor-pointer items-center gap-1" type="button">
        <IconThumbUp className="h-7 w-7" /> 0
      </button>
      <hr />
      <form className="flex flex-col gap-2">
        <div>1개의 댓글</div>
        <textarea
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id="message"
          placeholder="댓글을 작성하세요."
          rows={4}
        />
        <Button className="w-28 self-end" type="submit">
          댓글 작성
        </Button>
      </form>
      <ul className="flex flex-col gap-2">
        <li className="flex flex-col gap-4 py-4">
          <div className="flex items-center gap-1 text-sm">
            <div className="mr-1 h-8 w-8 rounded-full bg-gray-400" />
            <div>닉네임</div>•<div className="text-gray-500">1분 전</div>
          </div>
          <div className="whitespace-pre-line text-base">댓글</div>
        </li>
      </ul>
    </Box>
  );
}
